import json
import shutil
import os

# JSON de selecciones (solo las fotos del evento - webp)
selecciones = [
    {"archivo": "images/evento/DSC_3617.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3620.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3623.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3629.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3636.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3642.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3644.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3660.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3673.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3682.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3687.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3688.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3692.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3702.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3706.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3712.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3722.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3727.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3740.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3741.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3746.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3747.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3750.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3751.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3760.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3782.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3792.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3823.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3867.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
    {"archivo": "images/evento/DSC_3878.webp", "ampliacion": False, "impresion": True, "invitacion": False, "descartada": False},
]

# Carpetas de destino
carpetas = ['ampliacion', 'impresion', 'invitacion', 'descartada']

# Asegurar que existan las carpetas
for carpeta in carpetas:
    os.makedirs(carpeta, exist_ok=True)

# Contadores
contadores = {c: 0 for c in carpetas}

# Procesar cada selección
for sel in selecciones:
    archivo_origen = sel['archivo']
    nombre_archivo = os.path.basename(archivo_origen)
    
    if not os.path.exists(archivo_origen):
        print(f"ADVERTENCIA: No existe {archivo_origen}")
        continue
    
    # Copiar a cada carpeta según clasificación
    for carpeta in carpetas:
        if sel.get(carpeta, False):
            destino = os.path.join(carpeta, nombre_archivo)
            shutil.copy2(archivo_origen, destino)
            contadores[carpeta] += 1
            print(f"Copiado: {nombre_archivo} -> {carpeta}/")

print("\n--- RESUMEN ---")
for carpeta, cantidad in contadores.items():
    print(f"{carpeta}: {cantidad} fotos")
