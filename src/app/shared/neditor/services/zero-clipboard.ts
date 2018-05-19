export abstract class ZeroClipboardInter {
  version: string;
  abstract setSize(): this;
  abstract setHtml(): this;
  abstract setRichText(): this;
  abstract setText(): void;
  abstract elements(): any[];
  abstract unclip(): this;
  abstract clip(): this;
  abstract handlers(): any;
  abstract off(): this;
  abstract on(): this;
  abstract emit(): void;
  abstract clearData(): void;
  abstract setData(): void;
  abstract state(): any;
  abstract deactivate(): void;
  abstract activate(): void;
  abstract config(): void;
  abstract isFlashUnusable(): void;
  abstract destroy(): void;
}
