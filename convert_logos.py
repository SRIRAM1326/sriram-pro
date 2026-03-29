import os
from PIL import Image

def convert_icns_to_png(source_dir, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        
    for filename in os.listdir(source_dir):
        if filename.lower().endswith('.icns'):
            source_path = os.path.join(source_dir, filename)
            # Use the filename without extension for the target
            target_name = os.path.splitext(filename)[0] + '.png'
            target_path = os.path.join(target_dir, target_name)
            
            try:
                with Image.open(source_path) as img:
                    # icns files often contain multiple sizes, Pillow usually picks the largest one
                    img.save(target_path, 'PNG')
                print(f"Converted {filename} -> {target_name}")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    src = r"c:\Users\sriram\Downloads\sriram-pro\logo"
    dst = r"c:\Users\sriram\Downloads\sriram-pro\public\logos"
    convert_icns_to_png(src, dst)
