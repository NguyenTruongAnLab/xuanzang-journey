import os
import shutil
from icrawler.builtin import BingImageCrawler, GoogleImageCrawler
from PIL import Image, UnidentifiedImageError, ImageOps
import logging
import time
import imagehash

# --- Configuration ---
logging.basicConfig(level=logging.ERROR)
MAX_COLOR_COUNT = 500000
MIN_IMAGE_HEIGHT = 480
TARGET_RESOLUTION = (1024, 768)
MAX_CRAWL_NUM = 5  # Number of images to download per attempt
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
}

# --- Data: The Journey Stops ---
journey_stops = [
    ("Chang'an", "Xi'an", "China"),
    ("Liangzhou", "Wuwei", "China"),
    ("Dunhuang", "Dunhuang", "China"),
    ("Hami", "Hami", "China"),
    ("Turfan", "Turpan", "China"),
    ("Kucha", "Kuqa", "China"),
    ("Aksu", "Aksu", "China"),
    ("Tokmok", "Tokmok", "Kyrgyzstan"),
    ("Tashkent", "Tashkent", "Uzbekistan"),
    ("Samarkand", "Samarkand", "Uzbekistan"),
    ("Balkh", "Balkh", "Afghanistan"),
    ("Bamiyan", "Bamiyan", "Afghanistan"),
    ("Kabul", "Kabul", "Afghanistan"),
    ("Peshawar", "Peshawar", "Pakistan"),
    ("Taxila", "Taxila", "Pakistan"),
    ("Srinagar", "Srinagar", "India"),
    ("Mathura", "Mathura", "India"),
    ("Kanauj", "Kannauj", "India"),
    ("Varanasi", "Varanasi", "India"),
    ("Bodh Gaya", "Bodh Gaya", "India"),
    ("Nalanda", "Nalanda", "India"),
    ("Pataliputra", "Patna", "India"),
    ("Kanchipuram", "Kanchipuram", "India"),
    ("Kanauj Return", "Kannauj", "India"),
    ("Kashmir Return", "Srinagar", "India"),
    ("Kashgar", "Kashgar", "China"),
    ("Khotan", "Hotan", "China"),
    ("Dunhuang Return", "Dunhuang", "China"),
    ("Chang'an Return", "Xi'an", "China")
]

# --- Helper Functions ---
def apply_sepia_tone(img):
    grayscale = img.convert("L")
    sepia_palette = []
    for i in range(256):
        r = min(255, int(i * 1.07))
        g = min(255, int(i * 0.74))
        b = min(255, int(i * 0.43))
        sepia_palette.extend((r, g, b))
    grayscale.putpalette(sepia_palette)
    sepia_image = grayscale.convert("RGB")
    return sepia_image

def crop_and_resize_image(img, target_resolution):
    cropped_and_resized_img = ImageOps.fit(
        img,
        target_resolution,
        Image.Resampling.LANCZOS
    )
    return cropped_and_resized_img

def get_themed_queries(city, country, cache_buster_id):
    """Generates the base queries for a location without negative keywords."""
    return {
        '0001.jpg': [
            (f"engraving of ancient ruins in \"{city}, {country}\" -people -modern {cache_buster_id}", "engraving"),
            (f"19th century lithograph of architecture in \"{city}, {country}\" -people -reconstruction {cache_buster_id}", "lithograph"),
            (f"archaeological line drawing of \"{city}\" ruins -people {cache_buster_id}", "drawing"),
        ],
        '0002.jpg': [
            (f"ancient ruins sketch \"{city}, {country}\" -people -modern {cache_buster_id}", "ruins_sketch"),
            (f"archaeological site drawing \"{city}, {country}\" -people -tourist {cache_buster_id}", "site_drawing"),
            (f"19th century woodcut print \"{city}, {country}\" -people {cache_buster_id}", "woodcut"),
        ],
        '0003.jpg': [
            (f"buddhist monastery ink painting \"{city}, {country}\" silk road -people {cache_buster_id}", "buddhist_art"),
            (f"ancient buddhist temple woodcut engraving \"{city}, {country}\" -people {cache_buster_id}", "buddhist_engraving"),
            (f"ancient stupa drawing \"{city}, {country}\" -people {cache_buster_id}", "stupa_drawing"),
        ],
        '0004.jpg': [
            (f"silk road landscape engraving near \"{city}, {country}\" scenery -people {cache_buster_id}", "road_conditions"),
            (f"19th century drawing of terrain near \"{city}\" -people {cache_buster_id}", "terrain_drawing"),
            (f"ink wash painting of mountains near \"{city}, {country}\" {cache_buster_id}", "ink_mountains"),
        ]
    }

def try_to_find_and_process_image(crawler_class, search_term, final_path, temp_folder, global_hash_set, saved_image_hashes):
    """
    Attempts to download a batch of images and processes the first valid one.
    Returns True on success, False on failure.
    """
    shutil.rmtree(temp_folder, ignore_errors=True)
    os.makedirs(temp_folder, exist_ok=True)
    
    try:
        crawler = crawler_class(storage={"root_dir": temp_folder})
        crawler.downloader.session.headers.update(HEADERS)
        crawler.crawl(keyword=search_term, filters={'size': 'large'}, max_num=MAX_CRAWL_NUM)
    except Exception as e:
        # This can happen if a crawler has issues, e.g., with Google's changing API
        print(f"        [!] Crawler itself failed: {e}")
        return False
        
    downloaded_files = os.listdir(temp_folder)
    for filename in downloaded_files:
        candidate_path = os.path.join(temp_folder, filename)
        try:
            with Image.open(candidate_path) as img:
                h = imagehash.phash(img)
                if h in saved_image_hashes or h in global_hash_set: continue
                if img.size[1] < MIN_IMAGE_HEIGHT: continue
                if img.mode == 'RGB' and len(img.getcolors(MAX_COLOR_COUNT) or []) >= MAX_COLOR_COUNT: continue

                # If all checks pass, process and save the image
                final_image = crop_and_resize_image(img, TARGET_RESOLUTION)
                sepia_img = apply_sepia_tone(final_image)
                sepia_img.save(final_path)
                saved_image_hashes.add(h)
                global_hash_set.add(h)
                return True # Success!
        except (UnidentifiedImageError, OSError):
            continue # Corrupted file, try next
    
    return False # Failure, no valid image found in this batch

# --- Core Processing Logic ---
def process_stop_efficiently(stop_index, city, country, global_hash_set):
    base_images_folder = "images"
    temp_folder = os.path.join(base_images_folder, "temp_downloads")
    saved_image_hashes = set()
    
    cache_buster_id = f"ref_{stop_index:02d}"
    city_prefix = f"{stop_index:02d}_{city.replace(' ', '_')}"
    files_saved_count = 0

    themed_queries = get_themed_queries(city, country, cache_buster_id)
    
    # Define negative keywords for different passes
    NEG_KEYWORDS_STRICT = "-building -temple -palace -pagoda -whole -entire -exterior -outside -architecture -panorama -site -hall -jesus -christ -biblical -bible -apostle -europe -leonardo -gothic  -renaissance -cathedral -crucifix -holy -church -paris -italy -vatican -supper -davinci -michelangelo -raphael -sistine -fresco -altar -madonna -saint -mary -monastery -convent -chapel"
    NEG_KEYWORDS_RELAXED = "-jesus -christ -biblical -bible -apostle -europe -leonardo -gothic -renaissance -cathedral -crucifix -holy -church -paris -italy -vatican -supper -davinci -michelangelo -raphael -sistine -fresco -altar -madonna -saint -mary -monastery -convent -chapel"

    for file_suffix, base_queries in themed_queries.items():
        image_found_for_theme = False
        final_filename = f"{city_prefix}_{file_suffix}"
        final_path = os.path.join(base_images_folder, final_filename)

        # --- The Fallback Cascade ---
        # Pass 1: Bing with Strict Filtering
        for term, label in base_queries:
            print(f"    - Searching (Bing, strict) for '{label}' to save as {final_filename}...")
            full_term = f"{term} {NEG_KEYWORDS_STRICT}"
            if try_to_find_and_process_image(BingImageCrawler, full_term, final_path, temp_folder, global_hash_set, saved_image_hashes):
                image_found_for_theme = True
                print(f"        > Success! Saved {final_filename}.")
                break
        if image_found_for_theme:
            files_saved_count += 1
            continue

        # Pass 2: Google with Strict Filtering
        print(f"    --- Fallback: Trying Google (strict) for {final_filename} ---")
        for term, label in base_queries:
            print(f"    - Searching (Google, strict) for '{label}'...")
            full_term = f"{term} {NEG_KEYWORDS_STRICT}"
            if try_to_find_and_process_image(GoogleImageCrawler, full_term, final_path, temp_folder, global_hash_set, saved_image_hashes):
                image_found_for_theme = True
                print(f"        > Success! Saved {final_filename}.")
                break
        if image_found_for_theme:
            files_saved_count += 1
            continue

        # Pass 3: Bing with Relaxed Filtering
        print(f"    --- Fallback: Trying Bing (relaxed) for {final_filename} ---")
        for term, label in base_queries:
            print(f"    - Searching (Bing, relaxed) for '{label}'...")
            full_term = f"{term} {NEG_KEYWORDS_RELAXED}"
            if try_to_find_and_process_image(BingImageCrawler, full_term, final_path, temp_folder, global_hash_set, saved_image_hashes):
                image_found_for_theme = True
                print(f"        > Success! Saved {final_filename}.")
                break
        if image_found_for_theme:
            files_saved_count += 1
            continue

        # Pass 4: Google with Relaxed Filtering
        print(f"    --- Fallback: Trying Google (relaxed) for {final_filename} ---")
        for term, label in base_queries:
            print(f"    - Searching (Google, relaxed) for '{label}'...")
            full_term = f"{term} {NEG_KEYWORDS_RELAXED}"
            if try_to_find_and_process_image(GoogleImageCrawler, full_term, final_path, temp_folder, global_hash_set, saved_image_hashes):
                image_found_for_theme = True
                print(f"        > Success! Saved {final_filename}.")
                break
        if image_found_for_theme:
            files_saved_count += 1
            continue
            
        # If all fallbacks fail
        if not image_found_for_theme:
            print(f"      [!!!] CRITICAL: No image found for {final_filename} after all attempts.")

    shutil.rmtree(temp_folder, ignore_errors=True)
    print(f"  > Finished {city}. Saved {files_saved_count} final images.")

# --- Main Execution ---
def main():
    os.makedirs("images", exist_ok=True)
    total_stops = len(journey_stops)
    global_hash_set = set()
    
    for idx, (stop_name, city, country) in enumerate(journey_stops, 1):
        print("-" * 50)
        print(f"Processing Stop {idx}/{total_stops}: {stop_name} ({city}, {country})")
        process_stop_efficiently(idx, city, country, global_hash_set)
        time.sleep(0.5)
        
    print("-" * 50)
    print("All stops have been processed.")

if __name__ == "__main__":
    main()