import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, config, toRem } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import CinnySVG from '../../../../public/res/svg/cinny.svg';

export function WelcomePage() {
  const { t } = useTranslation();
  return (
    <Page>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
        <PageHeroSection>
          <PageHero
            icon={<img width="70" height="70" src={CinnySVG} alt="Logo" />}
            title={t('welcome.title')}
            subTitle={<span>{t('welcome.subtitle')}</span>}
          >
            <Box justifyContent="Center">
              <Box grow="Yes" style={{ maxWidth: toRem(300) }} direction="Column" gap="300" />
            </Box>
          </PageHero>
        </PageHeroSection>
      </Box>
    </Page>
  );
}
