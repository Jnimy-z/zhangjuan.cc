// src/i18n/index.ts
import zh from './zh.json';
import en from './en.json';

const translations = { zh, en };

export function getTranslations(lang: string) {
  // 如果语言以 'en' 开头则返回英文，否则默认中文
  if (lang.startsWith('en')) return en;
  return zh;
}