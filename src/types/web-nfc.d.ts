/** Minimal Web NFC typings (Chrome Android). */

interface NDEFMessageInit {
  records: NDEFRecordInit[];
}

interface NDEFRecordInit {
  recordType: string;
  mediaType?: string;
  id?: string;
  data?: BufferSource | string;
  encoding?: string;
  lang?: string;
}

interface NDEFRecord {
  readonly recordType: string;
  readonly mediaType: string | null;
  readonly id: string;
  readonly data: DataView | null;
  readonly encoding: string | null;
  readonly lang: string | null;
  toRecords?: () => NDEFRecord[];
}

interface NDEFMessage {
  readonly records: readonly NDEFRecord[];
}

interface NDEFReadingEvent extends Event {
  readonly serialNumber: string;
  readonly message: NDEFMessage;
}

interface NDEFReader extends EventTarget {
  scan(options?: { signal?: AbortSignal }): Promise<void>;
  write(
    message: NDEFMessageInit | string,
    options?: { signal?: AbortSignal },
  ): Promise<void>;
  onreading: ((this: NDEFReader, event: NDEFReadingEvent) => void) | null;
  onreadingerror: ((this: NDEFReader, event: Event) => void) | null;
  addEventListener(
    type: "reading",
    listener: (event: NDEFReadingEvent) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: "readingerror",
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare const NDEFReader: {
  prototype: NDEFReader;
  new (): NDEFReader;
};

interface Window {
  NDEFReader?: typeof NDEFReader;
}
