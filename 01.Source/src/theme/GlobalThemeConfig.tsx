
import { ConfigProvider } from 'antd';
import ThemeConfigAntd from './ThemeConfigAntd';

function GlobalThemeConfig({ ...rest }) {
  // const { theme } = useTheme();

  // const { antdThemeConfig } = useModule() || {};
  return (
    <ConfigProvider theme={ThemeConfigAntd('light', {})}>
      {rest.children}
    </ConfigProvider>
  );
}

export default GlobalThemeConfig;
