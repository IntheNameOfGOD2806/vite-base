import type { TabLogin } from '@/shared/types';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { clsx, type ClassValue } from 'clsx';
export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};

export const trimData = (data: unknown): unknown => {
  if (data == null) return data; // null hoặc undefined

  if (typeof data === 'string') {
    return data.trim();
  }

  if (Array.isArray(data)) {
    return data.map(trimData);
  }

  if (typeof data === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(data)) {
      result[key] = trimData(val);
    }
    return result;
  }

  return data;
};

export const hasPermission = (
  tabid: (string | number)[] | undefined,
  listTab: TabLogin[]
): boolean => {
  if (!tabid || tabid.length === 0) return true;

  const IsVisitTab = listTab.some((item: TabLogin) =>
    tabid.some((tab: string | number) => tab === item.identity)
  );

  return IsVisitTab;
};

type ConstantItem = {
  value: string | number;
  label: string;
  technicalRequirement1Text?: string;
  technicalRequirement2Text?: string;
  sampleDimension1Text?: string;
  sampleDimension2Text?: string;
  labRemarkText?: string;
};
export function getLabelFromConstant(
  constants: Record<string, ConstantItem>,
  value: string | number,
  type?: string
): string {
  const match = Object.values(constants).find(
    item => item.value.toString() === value.toString()
  );

  switch (type) {
    case 'label':
      return match?.label ?? value.toString();

    case 'technicalRequirement1Text':
      return match?.technicalRequirement1Text ?? value.toString();

    case 'technicalRequirement2Text':
      return match?.technicalRequirement2Text ?? value.toString();

    case 'sampleDimension1Text':
      return match?.sampleDimension1Text ?? value.toString();

    case 'sampleDimension2Text':
      return match?.sampleDimension2Text ?? value.toString();

    case 'labRemarkText':
      return match?.labRemarkText ?? value.toString();

    default:
      return match?.label ?? value.toString();
  }
}
export const normFile = (
  e: UploadChangeParam<UploadFile<unknown>> | UploadFile<unknown>[]
): UploadFile<unknown>[] => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList ?? [];
};

export const validatorFileExtension = (
  fileName: string,
  acceptFile: string
) => {
  const parts: Array<string | undefined> = fileName.split('.');
  let type: string | undefined = '';
  if (parts.length > 1) {
    type = parts.pop();
  }
  if (!!type && acceptFile.includes(type.toLowerCase())) return true;
  return false;
};
