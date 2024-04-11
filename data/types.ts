import type { PropsWithChildren } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Locale } from '../localization';

export type SectionProps = PropsWithChildren<{
    title: string;
  }>;

export type RootStackParamList = {
  Home: {
    lang: Locale;
    name: string;
  };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;