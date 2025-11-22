// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = [
    // Fotos de la sesión (57)
    'images/foto7_0001.jpg', 'images/foto7_0002.jpg', 'images/foto7_0003.jpg',
    'images/foto7_0004.jpg', 'images/foto7_0005.jpg', 'images/foto7_0006.jpg',
    'images/foto7_0007.jpg', 'images/foto7_0008.jpg', 'images/foto7_0009.jpg',
    'images/foto7_0010.jpg', 'images/foto7_0011.jpg', 'images/foto7_0012.jpg',
    'images/foto7_0013.jpg', 'images/foto7_0014.jpg', 'images/foto7_0015.jpg',
    'images/foto7_0016.jpg', 'images/foto7_0017.jpg', 'images/foto7_0018.jpg',
    'images/foto7_0019.jpg', 'images/foto7_0020.jpg', 'images/foto7_0021.jpg',
    'images/foto7_0022.jpg', 'images/foto7_0023.jpg', 'images/foto7_0024.jpg',
    'images/foto7_0025.jpg', 'images/foto7_0026.jpg', 'images/foto7_0027.jpg',
    'images/foto7_0028.jpg', 'images/foto7_0029.jpg', 'images/foto7_0030.jpg',
    'images/foto7_0031.jpg', 'images/foto7_0032.jpg', 'images/foto7_0033.jpg',
    'images/foto7_0034.jpg', 'images/foto7_0035.jpg', 'images/foto7_0036.jpg',
    'images/foto7_0037.jpg', 'images/foto7_0038.jpg', 'images/foto7_0039.jpg',
    'images/foto7_0040.jpg', 'images/foto7_0041.jpg', 'images/foto7_0042.jpg',
    'images/foto7_0043.jpg', 'images/foto7_0044.jpg', 'images/foto7_0045.jpg',
    'images/foto7_0046.jpg', 'images/foto7_0047.jpg', 'images/foto7_0048.jpg',
    'images/foto7_0049.jpg', 'images/foto7_0050.jpg', 'images/foto7_0051.jpg',
    'images/foto7_0052.jpg', 'images/foto7_0053.jpg', 'images/foto7_0054.jpg',
    'images/foto7_0055.jpg', 'images/foto7_0056.jpg', 'images/foto7_0057.jpg',
    // Fotos del evento (197)
    'images/evento/DSC_3612.webp', 'images/evento/DSC_3616.webp', 'images/evento/DSC_3617.webp',
    'images/evento/DSC_3619.webp', 'images/evento/DSC_3620.webp', 'images/evento/DSC_3621.webp',
    'images/evento/DSC_3623.webp', 'images/evento/DSC_3624.webp', 'images/evento/DSC_3625.webp',
    'images/evento/DSC_3629.webp', 'images/evento/DSC_3633.webp', 'images/evento/DSC_3634.webp',
    'images/evento/DSC_3636.webp', 'images/evento/DSC_3638.webp', 'images/evento/DSC_3642.webp',
    'images/evento/DSC_3644.webp', 'images/evento/DSC_3649.webp', 'images/evento/DSC_3653.webp',
    'images/evento/DSC_3654.webp', 'images/evento/DSC_3656.webp', 'images/evento/DSC_3659.webp',
    'images/evento/DSC_3660.webp', 'images/evento/DSC_3663.webp', 'images/evento/DSC_3664.webp',
    'images/evento/DSC_3665.webp', 'images/evento/DSC_3668.webp', 'images/evento/DSC_3669.webp',
    'images/evento/DSC_3671.webp', 'images/evento/DSC_3673.webp', 'images/evento/DSC_3675.webp',
    'images/evento/DSC_3676.webp', 'images/evento/DSC_3678.webp', 'images/evento/DSC_3681.webp',
    'images/evento/DSC_3682.webp', 'images/evento/DSC_3684.webp', 'images/evento/DSC_3685.webp',
    'images/evento/DSC_3686.webp', 'images/evento/DSC_3687.webp', 'images/evento/DSC_3688.webp',
    'images/evento/DSC_3689.webp', 'images/evento/DSC_3691.webp', 'images/evento/DSC_3692.webp',
    'images/evento/DSC_3694.webp', 'images/evento/DSC_3695.webp', 'images/evento/DSC_3696.webp',
    'images/evento/DSC_3698.webp', 'images/evento/DSC_3699.webp', 'images/evento/DSC_3700.webp',
    'images/evento/DSC_3701.webp', 'images/evento/DSC_3702.webp', 'images/evento/DSC_3703.webp',
    'images/evento/DSC_3706.webp', 'images/evento/DSC_3707.webp', 'images/evento/DSC_3708.webp',
    'images/evento/DSC_3709.webp', 'images/evento/DSC_3711.webp', 'images/evento/DSC_3712.webp',
    'images/evento/DSC_3713.webp', 'images/evento/DSC_3716.webp', 'images/evento/DSC_3719.webp',
    'images/evento/DSC_3721.webp', 'images/evento/DSC_3722.webp', 'images/evento/DSC_3723.webp',
    'images/evento/DSC_3725.webp', 'images/evento/DSC_3727.webp', 'images/evento/DSC_3728.webp',
    'images/evento/DSC_3731.webp', 'images/evento/DSC_3737.webp', 'images/evento/DSC_3740.webp',
    'images/evento/DSC_3741.webp', 'images/evento/DSC_3744.webp', 'images/evento/DSC_3746.webp',
    'images/evento/DSC_3747.webp', 'images/evento/DSC_3748.webp', 'images/evento/DSC_3750.webp',
    'images/evento/DSC_3751.webp', 'images/evento/DSC_3756.webp', 'images/evento/DSC_3760.webp',
    'images/evento/DSC_3767.webp', 'images/evento/DSC_3770.webp', 'images/evento/DSC_3771.webp',
    'images/evento/DSC_3774.webp', 'images/evento/DSC_3775.webp', 'images/evento/DSC_3781.webp',
    'images/evento/DSC_3782.webp', 'images/evento/DSC_3785.webp', 'images/evento/DSC_3786.webp',
    'images/evento/DSC_3789.webp', 'images/evento/DSC_3792.webp', 'images/evento/DSC_3795.webp',
    'images/evento/DSC_3799.webp', 'images/evento/DSC_3804.webp', 'images/evento/DSC_3809.webp',
    'images/evento/DSC_3810.webp', 'images/evento/DSC_3811.webp', 'images/evento/DSC_3812.webp',
    'images/evento/DSC_3814.webp', 'images/evento/DSC_3816.webp', 'images/evento/DSC_3817.webp',
    'images/evento/DSC_3819.webp', 'images/evento/DSC_3821.webp', 'images/evento/DSC_3823.webp',
    'images/evento/DSC_3826.webp', 'images/evento/DSC_3827.webp', 'images/evento/DSC_3830.webp',
    'images/evento/DSC_3831.webp', 'images/evento/DSC_3833.webp', 'images/evento/DSC_3835.webp',
    'images/evento/DSC_3840.webp', 'images/evento/DSC_3842.webp', 'images/evento/DSC_3845.webp',
    'images/evento/DSC_3847.webp', 'images/evento/DSC_3849.webp', 'images/evento/DSC_3856.webp',
    'images/evento/DSC_3857.webp', 'images/evento/DSC_3860.webp', 'images/evento/DSC_3861.webp',
    'images/evento/DSC_3867.webp', 'images/evento/DSC_3868.webp', 'images/evento/DSC_3870.webp',
    'images/evento/DSC_3873.webp', 'images/evento/DSC_3874.webp', 'images/evento/DSC_3876.webp',
    'images/evento/DSC_3878.webp', 'images/evento/DSC_3879.webp', 'images/evento/DSC_3880.webp',
    'images/evento/DSC_3881.webp', 'images/evento/DSC_3882.webp', 'images/evento/DSC_3883.webp',
    'images/evento/DSC_3884.webp', 'images/evento/DSC_3885.webp', 'images/evento/DSC_3886.webp',
    'images/evento/DSC_3888.webp', 'images/evento/DSC_3889.webp', 'images/evento/DSC_3890.webp',
    'images/evento/DSC_3891.webp', 'images/evento/DSC_3893.webp', 'images/evento/DSC_3901.webp',
    'images/evento/DSC_3902.webp', 'images/evento/DSC_3909.webp', 'images/evento/DSC_3912.webp',
    'images/evento/DSC_3913.webp', 'images/evento/DSC_3915.webp', 'images/evento/DSC_3923.webp',
    'images/evento/DSC_3926.webp', 'images/evento/DSC_3928.webp', 'images/evento/DSC_3931.webp',
    'images/evento/DSC_3933.webp', 'images/evento/DSC_3937.webp', 'images/evento/DSC_3940.webp',
    'images/evento/DSC_3963.webp', 'images/evento/DSC_3967.webp', 'images/evento/DSC_3969.webp',
    'images/evento/DSC_3981.webp', 'images/evento/DSC_3982.webp', 'images/evento/DSC_3985.webp',
    'images/evento/DSC_3988.webp', 'images/evento/DSC_3994.webp', 'images/evento/DSC_3997.webp',
    'images/evento/DSC_4000.webp', 'images/evento/DSC_4004.webp', 'images/evento/DSC_4011.webp',
    'images/evento/DSC_4013.webp', 'images/evento/DSC_4017.webp', 'images/evento/DSC_4019.webp',
    'images/evento/DSC_4022.webp', 'images/evento/DSC_4028.webp', 'images/evento/DSC_4030.webp',
    'images/evento/DSC_4033.webp', 'images/evento/DSC_4034.webp', 'images/evento/DSC_4035.webp',
    'images/evento/DSC_4040.webp', 'images/evento/DSC_4042.webp', 'images/evento/DSC_4043.webp',
    'images/evento/DSC_4059.webp', 'images/evento/DSC_4063.webp', 'images/evento/DSC_4065.webp',
    'images/evento/DSC_4067.webp', 'images/evento/DSC_4082.webp', 'images/evento/DSC_4097.webp',
    'images/evento/DSC_4099.webp', 'images/evento/DSC_4103.webp', 'images/evento/DSC_4114.webp',
    'images/evento/DSC_4115.webp', 'images/evento/DSC_4123.webp', 'images/evento/DSC_4125.webp',
    'images/evento/DSC_4129.webp', 'images/evento/DSC_4131.webp', 'images/evento/DSC_4135.webp',
    'images/evento/DSC_4142.webp', 'images/evento/DSC_4143.webp', 'images/evento/DSC_4149.webp',
    'images/evento/DSC_4151.webp', 'images/evento/DSC_4155.webp', 'images/evento/DSC_4160.webp',
    'images/evento/DSC_4161.webp', 'images/evento/DSC_4166.webp'
];

const STORAGE_KEY = 'jadelik_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-jadelik-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS JADELIK\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
