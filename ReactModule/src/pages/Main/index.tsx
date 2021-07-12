import React from 'react';
import {
	FlexBox,
	FlexBoxAlignItems,
	FlexBoxDirection,
	FlexBoxJustifyContent,
	Link,
	LinkDesign
} from '@ui5/webcomponents-react';

import './styles.css';

export function MainPage() {
	return (
		<div id='page-main'>
			<FlexBox
				direction={FlexBoxDirection.Column}
				justifyContent={FlexBoxJustifyContent.Center}
				alignItems={FlexBoxAlignItems.Center}>
				<Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
					Getting Started with UI5 Web Component for React with Typescript
          </Link>
			</FlexBox>
		</div>
	);
}
