import { Avatar, AvatarSize, ShellBar } from '@ui5/webcomponents-react';

import logo from '../../assets/images/logo.svg';

export default function AppPageWrapper({ children }) {
  return (
    <div>
      <ShellBar
        logo={<Avatar image={logo} size={AvatarSize.XS} />}
        secondaryTitle="React App"
      />
      {children}
    </div>
  );
}
