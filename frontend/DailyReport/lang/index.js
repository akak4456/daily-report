import LocalizedStrings from 'react-native-localization';
import english from './en.js'
import korean from './kr.js'

export const strings = new LocalizedStrings({
    kr: korean,
 en: english,
});

export const changeLanguage = (languageKey) => {
    strings.setLanguage(languageKey)
}