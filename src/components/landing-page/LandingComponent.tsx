"use client";

import React from 'react';
import StarShopLanding from "../../../public/starshop-logos/StarShop-Logo-Landing.svg"
import Link from 'next/link'
import Image from "next/image"
import { ConnectWalletButton } from '../ui';
import OfflineNotice from '../ui/NetworkStatus';
import { useTranslation } from 'react-i18next';

const LandingPageComponent: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
    <main className="flex mt-[4rem] h-[100vh] w-full justify-center items-center">
      <section className='p-0 flex flex-col-reverse md:flex-row w-full xl:my-[35px] xl:pl-[100px] px-[10px] md:px-[50px] pb-[100px] text-white max-w-[1600px] m-auto'>
        <section className='w-full md:w-1/2 xl:max-w-[700px]'>
          <h1 className='uppercase text-white text-[50px] md:text-[64px] font-extrabold leading-[50px] md:leading-[64px]'>
            {t('landing.title')}
          </h1>
          <p className='text-white text-lg sm:text-sm mt-[20px] md:mt-[35px]'>
            {t('landing.description')}
          </p>
          <div className='flex justify-start items-center gap-4'>
            <Link
              href="/auth/register"
              aria-label={t('landing.registerAriaLabel')}
              className='mt-[30px] md:mt-[50px] font-bold inline-block bg-white text-primary-purple px-[10px] md:px-[40px] py-[15px] rounded-[25px] hover:bg-purple-100 leading-[22.72px] text-left cursor-pointer'
            >
              {t('landing.registerButton')}
            </Link>
            <ConnectWalletButton />
          </div>
          <section className='flex flex-col md:flex-row mt-[50px] !text-center'>
            <article className='mb-6'>
              <div className="text-4xl sm:text-4xl font-semibold md:mb-2">200+</div>
              <div className="text-lg sm:text-sm">{t('landing.stats.sellers')}</div>
            </article>
            <div className='h-16 min-w-[2px] bg-white mx-[50px] hidden md:block'></div>
            <article className='mb-6'>
              <div className="text-4xl sm:text-4xl font-semibold md:mb-2">2000+</div>
              <div className="text-lg sm:text-sm">{t('landing.stats.products')}</div>
            </article>
            <div className='h-16 min-w-[2px] bg-white mx-[50px] hidden md:block'></div>
            <article>
              <div className="text-4xl sm:text-4xl font-semibold md:mb-2">30,000+</div>
              <div className="text-lg sm:text-sm">{t('landing.stats.customers')}</div>
            </article>
          </section>
        </section>
      </section>
    </main>
     </>

  );
};

export default LandingPageComponent;
