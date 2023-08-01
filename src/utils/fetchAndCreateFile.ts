import { FieldChangeHandler, PartnerData } from '@/types';
import axios from 'axios';

export async function fetchAndCreateFile(
  partnerData: PartnerData,
  handleFieldChange: FieldChangeHandler
) {
  try {
    const response = await axios.get(
      `https://baza-trainee.tech/api/v1/files/${partnerData.imageUrl}`,
      {
        responseType: 'blob',
      }
    );
    const blob = response.data;
    const file = new File([blob], partnerData.imageUrl as string, {
      type: blob.type,
      lastModified: Date.now(),
    });
    handleFieldChange('file', file);
  } catch (error) {
    console.error('Failed to fetch and create file:', error);
  }
}
