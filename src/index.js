
import InputLoaderDocx from '@/components/Input/Loader/Docx';
import CryptoProCertificateSelector from '@/components/CryptoPro/Certificate/Selector';

// Configuring an installation plugin for the package (Vue.use call).
export function install(Vue) {
    if (install.installed) {
        return;
    }

    install.installed = true;

    Vue.component(CryptoProCertificateSelector.name, CryptoProCertificateSelector);
}

const plugin = {
    install,
};

// Autoloading to global Vue environment if possible.
let vueGlobal = null;

if ('undefined' !== typeof window) {
    vueGlobal = window.Vue;
} else if ('undefined' !== typeof global) {
    vueGlobal = global.Vue;
}

if (vueGlobal) {
    vueGlobal.use(plugin);
}

// Exporting a set of components for module usage (npm/webpack/etc.).
// Example: import { InputLoaderDocx, CryptoProCertificateSelector } from '@itnelo/crypto-pro-vue';
export {
    InputLoaderDocx,
    CryptoProCertificateSelector,
};
