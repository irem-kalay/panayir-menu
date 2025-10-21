import { useState } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

import arkaplan from '../assets/photos/menuArkaPlan.png';

import brüksel from '../assets/photos/bruksel.jpg';
import bubbleCupWaffle from '../assets/photos/bubbleCupWaffle.jpg';
import bubbleDondurmalı from '../assets/photos/bubbleDondurmalıSandvicWaffle.jpg';
import bubbleSandviç from '../assets/photos/bubbleSandvicWaffle.jpg';
import bubblewaffle from '../assets/photos/bubbleWaffle.jpg';
import çilektutukusu from '../assets/photos/cilekTutukusu.jpg';
import dondurma from '../assets/photos/dondurma.jpg';
import dondurma1 from '../assets/photos/dondurma1.jpg';
import dondurma2 from '../assets/photos/dondurma2.jpg';
import dondurma3 from '../assets/photos/dondurma3.jpg';
import dondurma4 from '../assets/photos/dondurma4.jpg';
import dondurmalıWaffle from '../assets/photos/dondurmalıWaffle.jpg';
import dubaiwaffle from '../assets/photos/dubaiWaffle.jpg';
import eksi from '../assets/photos/eksi.jpg';
import fıstıkk from '../assets/photos/fıstıkk.jpg';
import icecekler from '../assets/photos/icecekler.jpg';
import kahveler from '../assets/photos/kahveler.jpg';
import karamellim from '../assets/photos/karamellim.jpg';
import klasikWaffle from '../assets/photos/klasikWaffle.jpg';
import lotus from '../assets/photos/lotus.jpg';
import lotusWaffle from '../assets/photos/lotusWaffle.jpg';
import oreo from '../assets/photos/oreo.jpg';
import ormanmeyveli from '../assets/photos/ormanmeyveli.jpg';
import panayirspecial from '../assets/photos/panayir.jpg';
import snowy from '../assets/photos/snowy.jpg';
import waffle from '../assets/photos/wafflelar.jpg';


interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  subcategory: string;
}

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
}

export function CategoryPage({ categoryId, onBack }: CategoryPageProps) {
  const [activeSubcategory, setActiveSubcategory] = useState<string>('');

  const categoryData: Record<string, { title: string; subcategories: string[]; items: MenuItem[] }> = {
    waffles: {
      title: 'Waffle Çeşitleri',
      subcategories: ['Klasik', 'Brüksel Waffle', 'Bubble Waffle', 'Spesiyallerimiz'],
      items: [
        {
          name: 'Kendi Waffleını oluştur',
          description: '',
          price: '350 ₺',
          imageUrl: waffle,
          subcategory: 'Klasik'
        },
        {
          name: 'Klasik Waffle',
          description: 'waffle hamuru üzerine sütlü çikolata, muz  çilek, kivi, fındık ve beyaz çikolata sos',
          price: '350 ₺',
          imageUrl: klasikWaffle,
          subcategory: 'Klasik'
        },
        {
          name: 'Dondurmalı Waffle',
          description: 'Bir top dondurma ile servis edilir',
          price: '400 ₺',
          imageUrl: dondurmalıWaffle,
          subcategory: 'Klasik'
        },
        {
          name: 'Dubai Waffle',
          description: 'çıtır waffle hamuru üzerine belçika çikolatası arasında    dubai çikolata iç dolgusu üzerine pirinç antep fıstığı ve antep fıstığı sos yanında muz, çilek',
          price: '400 ₺',
          imageUrl: dubaiwaffle,
          subcategory: 'Klasik'
        },
        {
          name: 'Waffle American',
          description: 'waffle hamuru üzerine damla çikolata, üzerine Akçaağaç şurubu yanına çilek, muz',
          price: '400 ₺',
          imageUrl: '',
          subcategory: 'Klasik'
        },
        {
          name: 'Double American',
          description: '2 katlı waffle hamuru içerisinde damla çikolata, tereyağı, akçaağaç şurubu , meyvesiz servis edilir',
          price: '500 ₺',
          imageUrl: '',
          subcategory: 'Klasik'
        },
        {
          name: 'Fıstık Güzeli',
          description: 'çıtır brüksel waffle hamuru üzerine beyaz, sütlü belçika çikolatası, muz, çilek, fındık, antep fıstığı ve atep fıstığı sos',
          price: '400 ₺',
          imageUrl: fıstıkk,
          subcategory: 'Brüksel Waffle'
        },
        {
          name: 'Snowy',
          description: 'çıtır brüksel waffle hamuru üzerine beyaz, sütlü belçika çikolatası, muz, çilek, kivi, kestane şekeri, incir, beyaz çikolata sos ve hindistan cevizi',
          price: '400 ₺',
          imageUrl: snowy,
          subcategory: 'Brüksel Waffle'
        },
        {
          name: 'Brüksel Panayırı',
          description: 'çıtır brüksel waffle hamuru üzerine beyaz, sütlü belçika çikolatası, muz, çilek, fındık, yer fıstığı, file badem, antep fıstığı, beyaz çikolata sos',
          price: '400 ₺',
          imageUrl: brüksel,
          subcategory: 'Brüksel Waffle'
        },
        {
          name: 'Orman Meyveli',
          description: 'çıtır brüksel waffle hamuru üzerine beyaz, sütlü belçika çikolatası, muz, çilek ve orman meyveleri eşliğinde antep fıstığı parçalarının lezzet şöleni',
          price: '450 ₺',
          imageUrl: ormanmeyveli,
          subcategory: 'Brüksel Waffle'
        },
        {
          name: 'Cream Waffle',
          description: 'çıtır brüksel waffle hamuru üzerine krema üzerine muz ,çilek',
          price: '450 ₺',
          imageUrl: '',
          subcategory: 'Brüksel Waffle'
        },

        {
          name: 'Bubble Waffle',
          description: '',
          price: '450 ₺',
          imageUrl: bubblewaffle,
          subcategory: 'Bubble Waffle'
        },
        {
          name: 'Bubble Cup (Bardak) Waffle',
          description: '',
          price: '400 ₺',
          imageUrl: bubbleCupWaffle,
          subcategory: 'Bubble Waffle'
        },
        {
          name: 'Bubble Dondurmalı Sandviç Waffle',
          description: '',
          price: '490 ₺',
          imageUrl: bubbleDondurmalı,
          subcategory: 'Bubble Waffle'
        },
        {
          name: 'Bubble Sandviç Waffle',
          description: '',
          price: '450 ₺',
          imageUrl: bubbleSandviç,
          subcategory: 'Bubble Waffle'
        },
        {
          name: 'Kova Waffle',
          description: '',
          price: '600 ₺',
          imageUrl: '',
          subcategory: 'Bubble Waffle'
        },
        {
          name: 'Karamellim',
          description: 'sütlü çikolata, muz, çilek, fındık, özel karamel sos',
          price: '350 ₺',
          imageUrl: karamellim,
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Fıstık Şöleni',
          description: 'sütlü çikolata, muz, çilek, fındık, antep fıstığı sos, beyaz çikolata',
          price: '350 ₺',
          imageUrl: fıstıkk,
          subcategory: 'Spesiyallerimiz'
        },

        {
          name: 'Bitterim',
          description: 'bitter çikolata, muz, çilek, bitter damla çikolata, bitter pirinç patlağı,üzerine bitter sos',
          price: '350 ₺',
          imageUrl: '',
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Panayır Special Waffle',
          description: 'sütlü çikolata, muz,çilek, krep kırığı, fındık, sütlü damla çikolata,beyaz pirinç patlağı, bonibon, tutti frutti üzerine beyaz çikolata sos',
          price: '350 ₺',
          imageUrl: panayirspecial,
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Çilek Tutkusu',
          description: 'sütlü çikolata, çilek, frambuaz, pirinç patlağı, frambuaz damla çikolata üzerine çilek sos',
          price: '350 ₺',
          imageUrl: çilektutukusu,
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Beyaz Düş',
          description: 'beyaz çikolata, muz, beyaz pirinç patlağı, fındıık üzerine beyaz çikolata sos',
          price: '350 ₺',
          imageUrl: '',
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Lotus Waffle',
          description: 'waffle hamuru üzerine lotus karamalize bisküvi ezmesi, muz, çilek, lotus bisküvi parçaları üzerine beyaz çikolata 1 adet lotus bisküvi',
          price: '400 ₺',
          imageUrl: lotus,
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Oreo Waffle',
          description: 'sütlü çikolata, muz, parça fındık, sütlü pirinç patlağı, oreo bisküvi parçaları, beyaz çikolata sos üzerine 1 adet oreo bisküvi',
          price: '400 ₺',
          imageUrl: oreo,
          subcategory: 'Spesiyallerimiz'
        },
        {
          name: 'Ekşi Severlere Özel',
          description: 'tabanda sütlü çikolata muz, çilek, kivi, tutti frutti, portakal şekeri üzerine sütlü çikolata sos',
          price: '400 ₺',
          imageUrl: eksi,
          subcategory: 'Spesiyallerimiz'
        },

      ]
    },
    içecekler: {
      title: 'İçecekler',
      subcategories: ['İçecekler', 'Milkshake','Sıcak İçecekler', 'Fresh İçecekler', 'Bitki Çayları'],
      items: [
        {
          name: 'Coco Cola',
          description: '',
          price: '100 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'İçecekler'
        },
        {
          name: 'Fanta',
          description: 'Limon, Şeftali, Mango',
          price: '100 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'İçecekler'
        },
        {
          name: 'Sprite',
          description: '',
          price: '100 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'İçecekler'
        },
        {
          name: 'Su',
          description: '',
          price: '30 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'İçecekler'
        },
        {
          name: 'Soda',
          description: '',
          price: '70 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'İçecekler'
        },
        {
          name: 'Çilekli Milkshake',
          description: '',
          price: '250 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Milkshake'
        },
        {
          name: 'Çikolatalı Milkshake',
          description: '',
          price: '250 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Milkshake'
        },
        {
          name: 'Vanilyalı Milkshake',
          description: '',
          price: '250 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Milkshake'
        },
        {
          name: 'Sıcak Çikolata',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Sıcak İçecekler'
        },
        {
          name: 'Beyaz Çikolata',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Sıcak İçecekler'
        },
        {
          name: 'Salep',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Sıcak İçecekler'
        },
        {
          name: 'Çay',
          description: '',
          price: '30 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Sıcak İçecekler'
        },
        {
          name: 'Kivi Çayı',
          description: '',
          price: '40 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Sıcak İçecekler'
        },
        {
          name: 'Ev Yapımı Limonata',
          description: '',
          price: '100 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Fresh İçecekler'
        },
        {
          name: 'Çilekli Limonata',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Fresh İçecekler'
        },
        {
          name: 'Berry Hibiskus',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Fresh İçecekler'
        },
        {
          name: 'Ihlamur Çayı',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Bitki Çayları'
        },
        {
          name: 'Kuşburnu Çayı',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Bitki Çayları'
        },
        {
          name: 'Yeşil Çay',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Bitki Çayları'
        },

        {
          name: 'Ada Çayı',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Bitki Çayları'
        },

        {
          name: 'Kış Çayı',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwOTYyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Bitki Çayları'
        }

      ]
    },
    dondurmalar: {
      title: 'Dondurma Çeşitleri',
      subcategories: ['Dondurmalar'],
      items: [
        {
          name: 'Vanilyalı Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },
        {
          name: 'Çikolatalı Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },
        {
          name: 'Limonlu Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },
        {
          name: 'Çilekli Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },
        {
          name: 'Karamelli Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },{
          name: 'Oreolu Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        },
        {
          name: 'Antep Fıstıklı Dondurma',
          description: '',
          price: '50 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1721078917681-40f74d16d7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB3YWZmbGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDk2MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Dondurmalar'
        }
        
      ]
    },
    kahveler: {
      title: 'Kahve Çeşitleri',
      subcategories: ['Kahveler', 'Soğuk Kahve Çeşitleri'],
      items: [
        {
          name: 'Latte',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Fındıklı Latte',
          description: '',
          price: '170 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Karamel Latte',
          description: '',
          price: '170 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Pumpkin Spice Latte',
          description: '',
          price: '170 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Cappuccino',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Americano',
          description: 'Sütlü Çikolatalı',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Mocha',
          description: '',
          price: '180 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'White Chocolate Mocha',
          description: 'Sütlü Yoğun Esspresso',
          price: '180 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Flat White',
          description: 'Az Sütlü Esspresso',
          price: '130 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Cortado',
          description: '',
          price: '130 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Esspresso',
          description: '',
          price: '80 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Macchiato',
          description: 'Karamalize Şekerli ve Vanilya aromalı sütlü kahve',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Karamel Macchiato',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Chai Tea Latte',
          description: '',
          price: '180 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Chai Tea Coffe Latte',
          description: '',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Filtre Kahve',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },
        {
          name: 'Türk Kahvesi',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Kahveler'
        },

        {
          name: 'Ice Americano',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Ice Latte (Karamel)',
          description: '',
          price: '150 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Ice Mocha',
          description: '',
          price: '180 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Ice White Mocha',
          description: '',
          price: '180 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Ice Machiato',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Ice Caramel Macchiato',
          description: '',
          price: '120 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },
        {
          name: 'Frappe',
          description: 'Çikolata, Karamel, Vanilya',
          price: '200 ₺',
          imageUrl: 'https://images.unsplash.com/photo-1573235981030-d1527e49a4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBicnVuY2glMjBlbGVnYW50fGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          subcategory: 'Soğuk Kahve Çeşitleri'
        },

        
      ]
    }
  };

  const category = categoryData[categoryId];

  if (!category) {
    return <div>Category not found</div>;
  }

  // Initialize activeSubcategory to first subcategory if not set
  const currentSubcategory = activeSubcategory || category.subcategories[0];
  
  // Filter items by active subcategory
  const filteredItems = category.items.filter(
    item => item.subcategory === currentSubcategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-card/95"
        style={{
              backgroundImage: `linear-gradient(rgba(236, 199, 247, 0.64), rgba(249, 241, 249, 0.6)), url(${arkaplan})`
            }} 
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pt-safe">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-3 sm:mb-4 -ml-2 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Menüye Dön
          </Button>
          <div className="text-center pb-2">
            <h1 className="text-primary mb-1 sm:mb-2">{category.title}</h1>
            <p className="text-muted-foreground text-sm">
              Seçeneklerimiz Arasından Dilediğinizi Seçebilirsiniz
            </p>
          </div>
        </div>
        
        {/* Subcategory Navigation Tabs */}
        <div className="border-t border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Tabs value={currentSubcategory} onValueChange={setActiveSubcategory} className="w-full">
              <TabsList className="w-full justify-start h-auto p-0 bg-transparent rounded-none border-0 overflow-x-auto flex-nowrap">
                {category.subcategories.map((subcat) => (
                  <TabsTrigger
                    key={subcat}
                    value={subcat}
                    className="flex-shrink-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 sm:px-6 py-3 sm:py-4 touch-manipulation whitespace-nowrap"
                  >
                    {subcat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      {/* Menu Items */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 pb-safe">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredItems.map((item, index) => (
            <MenuItemCard
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center pb-safe">
          <p className="text-muted-foreground text-sm">
            Her Gün Açığız • 12:00 - 01:00 
          </p>
        </div>
      </footer>
    </div>
  );
}
