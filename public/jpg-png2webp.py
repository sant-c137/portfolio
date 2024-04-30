import os
from PIL import Image

# Obtener una lista de todos los archivos PNG y JPG en el directorio actual
archivos = [f for f in os.listdir('.') if f.endswith('.png') or f.endswith('.jpg')]

for archivo in archivos:
    # Abrir la imagen
    imagen = Image.open(archivo)

    # Generar el nombre del nuevo archivo WebP
    nombre_webp = os.path.splitext(archivo)[0] + '.webp'

    # Guardar la imagen como WebP
    imagen.save(nombre_webp, 'WebP')

    print(f'Archivo {archivo} convertido a {nombre_webp}')