import { Injectable } from '@angular/core';

export abstract class UndoManagerInter {
  list: any[] = [];
  index: number = 0;
  hasUndo: boolean = false;
  hasRedo: boolean = false;
  abstract undo(): void;
  abstract redo(): void;
  abstract restore(): void;
  abstract getScene(): { address: any; content: any };
  abstract save(): void;
  abstract update(): void;
  abstract reset(): void;
  abstract clearKey(): void;
}

@Injectable({
  providedIn: 'root',
})
export class UndoManager extends UndoManagerInter {
  constructor() {
    super();
  }
  undo() {}
  redo() {}
  restore() {}
  getScene() {
    return {
      address: null,
      content: null,
    };
  }
  save() {}
  update() {}
  reset() {}
  clearKey() {}
}
