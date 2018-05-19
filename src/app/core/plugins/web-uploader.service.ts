import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebUploaderService {
  constructor() {}
}

export interface Options {
  swf?: string;
  server?: string;
  dnd?: string;
  disableGlobalDnd?: boolean;
  paste?: any;
  pick?: string | OptionsPick;
  accept?: OptionsAccept | OptionsAccept[];
  thumb?: OptionsThumb;
  compress?: OptionsCompress;
  auto?: boolean;
  runtimeOrder?: 'html5,flash' | 'html5' | 'flash';
  prepareNextFile?: boolean;
  chunked?: boolean;
  chunkSize?: number;
  chunkRetry?: number;
  threads?: number;
  formData?: any;
  fileVal?: string;
  method?: 'POST' | 'GET';
  sendAsBinary?: boolean;
  fileNumLimit?: number;
  fileSizeLimit?: number;
  fileSingleSizeLimit?: number;
  duplicate?: boolean;
  disableWidgets?: string | string[];
}

export interface OptionsPick {
  id?: string | ElementRef;
  label?: string;
  innerHTML?: string;
  multiple?: boolean;
}

export interface OptionsAccept {
  title?: string;
  extensions?: string;
  mimeTypes?: string;
}

export interface OptionsThumb {
  width?: number;
  height?: number;
  quality?: number;
  allowMagnify?: boolean;
  crop?: boolean;
  type?: string;
}

export interface OptionsCompress {
  width?: number;
  height?: number;
  quality?: number;
  allowMagnify?: boolean;
  crop?: boolean;
  preserveHeaders?: boolean;
  noCompressIfLarger?: boolean;
  compressSize?: number;
}

export enum FileStatus {
  inited,
  queued,
  progress,
  complete,
  error,
  interrupt,
  invalid,
  cancelled,
}
export interface File {
  name?: string;
  size?: number;
  type?: string;
  lastModifiedDate?: number;
  id?: string;
  ext?: string;
  statusText?: string;
  setStatus(status: FileStatus, statusText?: string): void;
  getStatus(): FileStatus;
  getSource(): any;
  destroy(): void;
}
export class WebUploaderConfig {
  options?: Options;
  path?: string;
  dependentLib?: string;
  hook(webUploader: any): Promise<any> {
    return Promise.resolve(null);
  }
  _hook_finished: boolean = false;
}
