import json
import urllib.request
import os

with open('cr_cards_data.json') as f:
    data = json.load(f)

os.makedirs('images/cr_images', exist_ok=True)
os.makedirs('images/cr_evo_images', exist_ok=True)

for item in data['items']:
    name = item['name']
    icon_urls = item['iconUrls']
    icon_url = icon_urls.get('medium')
    evo_icon_url = icon_urls.get('evolutionMedium')

    if icon_url:
        try:
            urllib.request.urlretrieve(icon_url, f'images/cr_images/{name}.png')
            print(f'Saved images/cr_images/{name}.png')
        except Exception as e:
            print(f'Failed to download {name} image: {e}')

    if evo_icon_url:
        try:
            urllib.request.urlretrieve(evo_icon_url, f'images/cr_evo_images/{name}.png')
            print(f'Saved images/cr_evo_images/{name}.png')
        except Exception as e:
            print(f'Failed to download {name} evolution image: {e}')

