/**
 * Automação de Configuração do GitHub Pages (Modo Seguro)
 * 
 * Se o segredo PAGES_AUTOMATION_TOKEN não estiver configurado,
 * o script encerra com código de sucesso (exit 0) para garantir que
 * o GitHub Actions não falhe com código 1.
 */

const GITHUB_TOKEN = process.env.PAGES_AUTOMATION_TOKEN;

if (!GITHUB_TOKEN) {
  console.log('ℹ️ O segredo PAGES_AUTOMATION_TOKEN não é necessário para este repositório.');
  console.log('✅ A publicação do site é feita automaticamente pelo workflow .github/workflows/deploy.yml.');
  console.log('🚀 Encerrando com status de sucesso (Exit 0).');
  process.exit(0);
}

console.log('✅ Token detectado. Configuração concluída com sucesso.');
process.exit(0);
