export * from './content';
export * from './annotations';

// Add these new types for our sections
export interface ContactSectionProps extends BaseProps {
  id?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  form?: FormProps;
}

export interface AboutSectionProps extends BaseProps {
  title?: string;
  text?: string;
  image?: ImageProps;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  image?: ImageProps;
}

export interface TestimonialsSectionProps extends BaseProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

// Form types for the contact form
export interface FormFieldBase {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  width?: 'full' | 'half';
}

export interface TextFormFieldProps extends FormFieldBase {
  type: 'TextFormField';
  multiline?: boolean;
  rows?: number;
}

export interface SelectFormFieldProps extends FormFieldBase {
  type: 'SelectFormField';
  options: string[];
}

export type FormFieldProps = TextFormFieldProps | SelectFormFieldProps;

export interface FormProps {
  type: 'Form';
  fields?: FormFieldProps[];
  submitLabel?: string;
  action?: string;
  method?: string;
}

export type SectionProps =
  | HeroSectionProps
  | CardsSectionProps
  | ContactSectionProps
  | AboutSectionProps
  | TestimonialsSectionProps;
