import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Link as RLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    return (
      <Typography variant="h6">
        {t('LoginCreateLink:or')}
        &nbsp;
        <Link
          variant="inherit"
          underline="always"
          title={t('LoginCreateLink:title')}
          component={RLink}
          to="/account/create/"
        >
          {t('LoginCreateLink:text')}
        </Link>
        .
      </Typography>
    );
  },
);
