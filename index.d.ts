/**
 * Indicates start of a JPEG.
 * @type {number}
 */
export const jpegStartNumber: number

/**
 * Hex value for 'Exif'.
 * @type {number}
 */
export const exifString: number // Exif

/**
 * Indicates start of the EXIF attribute.
 * @type {number}
 */
export const exifStartNumber: number

/**
 * Hex value for 'MM'. This indicates big endian.
 * @type {number}
 */
export const bigEndianIndicator: number // MM

/**
 * Hex value for 'II'. This indicates little endian.
 * @type {number}
 */
export const littleEndianIndicator: number // II

export type Tag = {
  id: number
  name: string
  group: string
  category: string
}

export const tags: {
  [id: number]: Tag
}

/**
 * @deprecated
 */
export const allTagsFull: {
  [id: number]: Tag
}

/**
 * EXIF IFD tags.
 * @type {Object.<number, string>}
 */
export const exifIfdTags: {
  [id: number]: string
}

/**
 * EXIF pointer tags.
 * @type {Object.<number, string>}
 */
export const exifPointerTags: {
  [id: number]: string
}

/**
 * GPS tags.
 * @type {Object.<number, string>}
 */
export const gpsTags: {
  [id: number]: string
}

/**
 * TIFF tags.
 * @type {Object.<number, string>}
 */
export const tiffTags: {
  [id: number]: string
}

/**
 * All EXIF tags in a single object.
 * @type {Object.<number, string>}
 */
export const allTags: {
  [id: number]: string
}
