type CertificationType = {
  title: string;
  issuer: string;
  year?: string;
  link?: string;
  category: 'Cloud' | 'Frontend' | 'Backend' | 'AI/ML' | 'DevOps' | 'Other';
  type: 'Certification' | 'Course';
};

export default CertificationType;
