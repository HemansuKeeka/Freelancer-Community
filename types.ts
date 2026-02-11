import React from 'react';

export interface Member {
  id: string;
  name: string;
  role: string;
  background: string;
  bio: string;
  avatar: string;
  isOnline: boolean;
  isOpenToWork: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}