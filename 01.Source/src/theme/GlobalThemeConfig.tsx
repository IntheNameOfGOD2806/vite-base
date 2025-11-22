
import { ConfigProvider } from 'antd';
import ThemeConfigAntd from './ThemeConfigAntd';
import { useTheme } from '#/context/theme';
function GlobalThemeConfig({ ...rest }) {
  const { theme } = useTheme();
  return (
    <ConfigProvider theme={ThemeConfigAntd(theme, {})}>
      {rest.children}
    </ConfigProvider>
  );
}

export default GlobalThemeConfig;
