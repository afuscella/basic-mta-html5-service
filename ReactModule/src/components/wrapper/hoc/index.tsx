import AppGlobalProvider from '../provider';
import AppPageWrapper from '..';

export function appHOC(PageComponent) {
  return (props) => (
    <AppGlobalProvider>
      <AppPageWrapper>
        <PageComponent {...props} />
      </AppPageWrapper>
    </AppGlobalProvider>
  );
}
