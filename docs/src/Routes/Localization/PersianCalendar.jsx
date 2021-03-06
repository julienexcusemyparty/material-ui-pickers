import React from 'react';
import Code from '_shared/Code';
import SourcablePanel from '_shared/SourcablePanel';
import { Typography } from '@material-ui/core';

const PersianCalendar = () => (
  <div>
    <Typography variant="h3" gutterBottom> Setting Up Persian Calendar System </Typography>

    <Typography variant="body2" gutterBottom>
      <p key="persian-desc">
        Make sure you have read the
        <a href="https://material-ui-next.com/guides/right-to-left/"> right to left section </a>
        of the material-ui documentation page before proceeding.
      </p>
    </Typography>

    <Typography variant="body2" gutterBottom>
      You will also need to install the <code> material-ui-pickers-jalali-utils </code>
      package from npm.
    </Typography>

    <Code language="markup" text="npm install material-ui-pickers-jalali-utils" />

    <SourcablePanel
      title="Samples"
      sourceFile="Localization/PersianPickers.jsx"
      description={
        <div>
          <Typography variant="body2" gutterBottom>
            You can use the examples below. It is recommended that you change the font.
          </Typography>

          <Typography variant="body2" gutterBottom>
            Also, to make sure the example is fully functional,
            don&apos;t forget to change the direction of the page to
            Right to Left from the top right corner.
          </Typography>
        </div>
      }
    />
  </div>
);

export default PersianCalendar;

