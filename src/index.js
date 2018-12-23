/**
 * Indicates start of a JPEG.
 * @type {number}
 */
export const jpegStartNumber = 0xffd8

/**
 * Hex value for 'Exif'.
 * @type {number}
 */
export const exifString = 0x45786966 // Exif

/**
 * Indicates start of the EXIF attribute.
 * @type {number}
 */
export const exifStartNumber = 0xffe1

/**
 * Hex value for 'MM'. This indicates big endian.
 * @type {number}
 */
export const bigEndianIndicator = 0x4d4d // MM

/**
 * Hex value for 'II'. This indicates little endian.
 * @type {number}
 */
export const littleEndianIndicator = 0x4949 // II

/**
 * Represents a tag with id, name, group and category.
 * @typedef Tag
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} group
 * @property {string} category
 */

/**
 * All tags with additional values.
 * @type {Object<number, Tag>}
 */
export const allTagsFull = {
  0x0000: {
    id: 0x0000,
    name: 'GPSVersionID',
    group: 'gps',
    category: 'gps'
  },
  0x0001: {
    id: 0x0001,
    name: 'GPSLatitudeRef',
    group: 'gps',
    category: 'gps'
  },
  0x0002: {
    id: 0x0002,
    name: 'GPSLatitude',
    group: 'gps',
    category: 'gps'
  },
  0x0003: {
    id: 0x0003,
    name: 'GPSLongitudeRef',
    group: 'gps',
    category: 'gps'
  },
  0x0004: {
    id: 0x0004,
    name: 'GPSLongitude',
    group: 'gps',
    category: 'gps'
  },
  0x0005: {
    id: 0x0005,
    name: 'GPSAltitudeRef',
    group: 'gps',
    category: 'gps'
  },
  0x0006: {
    id: 0x0006,
    name: 'GPSAltitude',
    group: 'gps',
    category: 'gps'
  },
  0x0007: {
    id: 0x0007,
    name: 'GPSTimeStamp',
    group: 'gps',
    category: 'gps'
  },
  0x0008: {
    id: 0x0008,
    name: 'GPSSatellites',
    group: 'gps',
    category: 'gps'
  },
  0x0009: {
    id: 0x0009,
    name: 'GPSStatus',
    group: 'gps',
    category: 'gps'
  },
  0x000a: {
    id: 0x000a,
    name: 'GPSMeasureMode',
    group: 'gps',
    category: 'gps'
  },
  0x000b: {
    id: 0x000b,
    name: 'GPSDOP',
    group: 'gps',
    category: 'gps'
  },
  0x000c: {
    id: 0x000c,
    name: 'GPSSpeedRef',
    group: 'gps',
    category: 'gps'
  },
  0x000d: {
    id: 0x000d,
    name: 'GPSSpeed ',
    group: 'gps',
    category: 'gps'
  },
  0x000e: {
    id: 0x000e,
    name: 'GPSTrackRef',
    group: 'gps',
    category: 'gps'
  },
  0x000f: {
    id: 0x000f,
    name: 'GPSTrack',
    group: 'gps',
    category: 'gps'
  },
  0x0010: {
    id: 0x0010,
    name: 'GPSImgDirectionRef',
    group: 'gps',
    category: 'gps'
  },
  0x0011: {
    id: 0x0011,
    name: 'GPSImgDirection',
    group: 'gps',
    category: 'gps'
  },
  0x0012: {
    id: 0x0012,
    name: 'GPSMapDatum',
    group: 'gps',
    category: 'gps'
  },
  0x0013: {
    id: 0x0013,
    name: 'GPSDestLatitudeRef',
    group: 'gps',
    category: 'gps'
  },
  0x0014: {
    id: 0x0014,
    name: 'GPSDestLatitude',
    group: 'gps',
    category: 'gps'
  },
  0x0015: {
    id: 0x0015,
    name: 'GPSDestLongitudeRef',
    group: 'gps',
    category: 'gps'
  },
  0x0016: {
    id: 0x0016,
    name: 'GPSDestLongitude',
    group: 'gps',
    category: 'gps'
  },
  0x0017: {
    id: 0x0017,
    name: 'GPSDestBearingRef',
    group: 'gps',
    category: 'gps'
  },
  0x0018: {
    id: 0x0018,
    name: 'GPSDestBearing',
    group: 'gps',
    category: 'gps'
  },
  0x0019: {
    id: 0x0019,
    name: 'GPSDestDistanceRef',
    group: 'gps',
    category: 'gps'
  },
  0x001a: {
    id: 0x001a,
    name: 'GPSDestDistance',
    group: 'gps',
    category: 'gps'
  },
  0x001b: {
    id: 0x001b,
    name: 'GPSProcessingMethod',
    group: 'gps',
    category: 'gps'
  },
  0x001c: {
    id: 0x001c,
    name: 'GPSAreaInformation',
    group: 'gps',
    category: 'gps'
  },
  0x001d: {
    id: 0x001d,
    name: 'GPSDateStamp',
    group: 'gps',
    category: 'gps'
  },
  0x001e: {
    id: 0x001e,
    name: 'GPSDifferential',
    group: 'gps',
    category: 'gps'
  },
  0x001f: {
    id: 0x001f,
    name: 'GPSHPositioningError',
    group: 'gps',
    category: 'gps'
  },
  0x0100: {
    id: 0x0100,
    name: 'ImageWidth',
    group: 'file',
    category: 'tiff'
  },
  0x0101: {
    id: 0x0101,
    name: 'ImageLength',
    group: 'file',
    category: 'tiff'
  },
  0x0102: {
    id: 0x0102,
    name: 'BitsPerSample',
    group: 'other',
    category: 'tiff'
  },
  0x0103: {
    id: 0x0103,
    name: 'Compression',
    group: 'file',
    category: 'tiff'
  },
  0x0106: {
    id: 0x0106,
    name: 'PhotometricInterpretation',
    group: 'other',
    category: 'tiff'
  },
  0x010e: {
    id: 0x010e,
    name: 'ImageDescription',
    group: 'other',
    category: 'tiff'
  },
  0x010f: {
    id: 0x010f,
    name: 'Make',
    group: 'other',
    category: 'tiff'
  },
  0x0110: {
    id: 0x0110,
    name: 'Model',
    group: 'other',
    category: 'tiff'
  },
  0x0111: {
    id: 0x0111,
    name: 'StripOffsets',
    group: 'other',
    category: 'tiff'
  },
  0x0112: {
    id: 0x0112,
    name: 'Orientation',
    group: 'other',
    category: 'tiff'
  },
  0x0115: {
    id: 0x0115,
    name: 'SamplesPerPixel',
    group: 'other',
    category: 'tiff'
  },
  0x0116: {
    id: 0x0116,
    name: 'RowsPerStrip',
    group: 'other',
    category: 'tiff'
  },
  0x0117: {
    id: 0x0117,
    name: 'StripByteCounts',
    group: 'other',
    category: 'tiff'
  },
  0x011a: {
    id: 0x011a,
    name: 'XResolution',
    group: 'other',
    category: 'tiff'
  },
  0x011b: {
    id: 0x011b,
    name: 'YResolution',
    group: 'other',
    category: 'tiff'
  },
  0x011c: {
    id: 0x011c,
    name: 'PlanarConfiguration',
    group: 'other',
    category: 'tiff'
  },
  0x0128: {
    id: 0x0128,
    name: 'ResolutionUnit',
    group: 'other',
    category: 'tiff'
  },
  0x012d: {
    id: 0x012d,
    name: 'TransferFunction',
    group: 'other',
    category: 'tiff'
  },
  0x0131: {
    id: 0x0131,
    name: 'Software',
    group: 'other',
    category: 'tiff'
  },
  0x0132: {
    id: 0x0132,
    name: 'DateTime',
    group: 'other',
    category: 'tiff'
  },
  0x013b: {
    id: 0x013b,
    name: 'Artist',
    group: 'other',
    category: 'tiff'
  },
  0x013e: {
    id: 0x013e,
    name: 'WhitePoint',
    group: 'other',
    category: 'tiff'
  },
  0x013f: {
    id: 0x013f,
    name: 'PrimaryChromaticities',
    group: 'other',
    category: 'tiff'
  },
  0x0201: {
    id: 0x0201,
    name: 'JPEGInterchangeFormat',
    group: 'other',
    category: 'tiff'
  },
  0x0202: {
    id: 0x0202,
    name: 'JPEGInterchangeFormatLength',
    group: 'other',
    category: 'tiff'
  },
  0x0211: {
    id: 0x0211,
    name: 'YCbCrCoefficients',
    group: 'other',
    category: 'tiff'
  },
  0x0212: {
    id: 0x0212,
    name: 'YCbCrSubSampling',
    group: 'other',
    category: 'tiff'
  },
  0x0213: {
    id: 0x0213,
    name: 'YCbCrPositioning',
    group: 'other',
    category: 'tiff'
  },
  0x0214: {
    id: 0x0214,
    name: 'ReferenceBlackWhite',
    group: 'other',
    category: 'tiff'
  },
  0x8298: {
    id: 0x8298,
    name: 'Copyright',
    group: 'other',
    category: 'tiff'
  },
  0x829a: {
    id: 0x829a,
    name: 'ExposureTime',
    group: 'other',
    category: 'ifd'
  },
  0x829d: {
    id: 0x829d,
    name: 'FNumber',
    group: 'other',
    category: 'ifd'
  },
  0x8769: {
    id: 0x8769,
    name: 'ExifIFDPointer',
    group: 'pointer',
    category: 'pointer'
  },
  0x8822: {
    id: 0x8822,
    name: 'ExposureProgram',
    group: 'other',
    category: 'ifd'
  },
  0x8824: {
    id: 0x8824,
    name: 'SpectralSensitivity',
    group: 'other',
    category: 'ifd'
  },
  0x8825: {
    id: 0x8825,
    name: 'GPSInfoIFDPointer',
    group: 'pointer',
    category: 'pointer'
  },
  0x8827: {
    id: 0x8827,
    name: 'PhotographicSensitivity',
    group: 'other',
    category: 'ifd'
  },
  0x8828: {
    id: 0x8828,
    name: 'OECF',
    group: 'other',
    category: 'ifd'
  },
  0x8830: {
    id: 0x8830,
    name: 'SensitivityType',
    group: 'other',
    category: 'ifd'
  },
  0x8831: {
    id: 0x8831,
    name: 'StandardOutputSensitivity',
    group: 'other',
    category: 'ifd'
  },
  0x8832: {
    id: 0x8832,
    name: 'RecommendedExposureIndex',
    group: 'other',
    category: 'ifd'
  },
  0x8833: {
    id: 0x8833,
    name: 'ISOSpeed',
    group: 'other',
    category: 'ifd'
  },
  0x8834: {
    id: 0x8834,
    name: 'ISOSpeedLatitudeyyy',
    group: 'other',
    category: 'ifd'
  },
  0x8835: {
    id: 0x8835,
    name: 'ISOSpeedLatitudezzz',
    group: 'other',
    category: 'ifd'
  },
  0x9000: {
    id: 0x9000,
    name: 'ExifVersion',
    group: 'other',
    category: 'ifd'
  },
  0x9003: {
    id: 0x9003,
    name: 'DateTimeOriginal',
    group: 'other',
    category: 'ifd'
  },
  0x9004: {
    id: 0x9004,
    name: 'DateTimeDigitized',
    group: 'other',
    category: 'ifd'
  },
  0x9010: {
    id: 0x9010,
    name: 'Time',
    group: 'other',
    category: 'ifd'
  },
  0x9011: {
    id: 0x9011,
    name: 'OffsetTimeOriginal',
    group: 'other',
    category: 'ifd'
  },
  0x9012: {
    id: 0x9012,
    name: 'OffsetTimeDigitized',
    group: 'other',
    category: 'ifd'
  },
  0x9101: {
    id: 0x9101,
    name: 'ComponentsConfiguration',
    group: 'other',
    category: 'ifd'
  },
  0x9102: {
    id: 0x9102,
    name: 'CompressedBitsPerPixel',
    group: 'other',
    category: 'ifd'
  },
  0x9201: {
    id: 0x9201,
    name: 'ShutterSpeedValue',
    group: 'photograph',
    category: 'ifd'
  },
  0x9202: {
    id: 0x9202,
    name: 'ApertureValue',
    group: 'other',
    category: 'ifd'
  },
  0x9203: {
    id: 0x9203,
    name: 'BrightnessValue',
    group: 'other',
    category: 'ifd'
  },
  0x9204: {
    id: 0x9204,
    name: 'ExposureBiasValue',
    group: 'photograph',
    category: 'ifd'
  },
  0x9205: {
    id: 0x9205,
    name: 'MaxApertureValue',
    group: 'other',
    category: 'ifd'
  },
  0x9206: {
    id: 0x9206,
    name: 'SubjectDistance',
    group: 'other',
    category: 'ifd'
  },
  0x9207: {
    id: 0x9207,
    name: 'MeteringMode',
    group: 'photograph',
    category: 'ifd'
  },
  0x9208: {
    id: 0x9208,
    name: 'LightSource',
    group: 'other',
    category: 'ifd'
  },
  0x9209: {
    id: 0x9209,
    name: 'Flash',
    group: 'photograph',
    category: 'ifd'
  },
  0x920a: {
    id: 0x920a,
    name: 'FocalLength',
    group: 'photograph',
    category: 'ifd'
  },
  0x9214: {
    id: 0x9214,
    name: 'SubjectArea',
    group: 'other',
    category: 'ifd'
  },
  0x927c: {
    id: 0x927c,
    name: 'MakerNote',
    group: 'other',
    category: 'ifd'
  },
  0x9286: {
    id: 0x9286,
    name: 'UserComment',
    group: 'other',
    category: 'ifd'
  },
  0x9290: {
    id: 0x9290,
    name: 'SubSecTime',
    group: 'other',
    category: 'ifd'
  },
  0x9291: {
    id: 0x9291,
    name: 'SubSecTimeOriginal',
    group: 'other',
    category: 'ifd'
  },
  0x9292: {
    id: 0x9292,
    name: 'SubSecTimeDigitized',
    group: 'other',
    category: 'ifd'
  },
  0x9400: {
    id: 0x9400,
    name: 'Temperature',
    group: 'other',
    category: 'ifd'
  },
  0x9401: {
    id: 0x9401,
    name: 'Humidity',
    group: 'other',
    category: 'ifd'
  },
  0x9402: {
    id: 0x9402,
    name: 'Pressure',
    group: 'other',
    category: 'ifd'
  },
  0x9403: {
    id: 0x9403,
    name: 'WaterDepth',
    group: 'other',
    category: 'ifd'
  },
  0x9404: {
    id: 0x9404,
    name: 'Acceleration',
    group: 'other',
    category: 'ifd'
  },
  0x9405: {
    id: 0x9405,
    name: 'CameraElevationAngle',
    group: 'other',
    category: 'ifd'
  },
  0xa000: {
    id: 0xa000,
    name: 'FlashpixVersion',
    group: 'other',
    category: 'ifd'
  },
  0xa001: {
    id: 0xa001,
    name: 'ColorSpace',
    group: 'other',
    category: 'ifd'
  },
  0xa002: {
    id: 0xa002,
    name: 'PixelXDimension',
    group: 'other',
    category: 'ifd'
  },
  0xa003: {
    id: 0xa003,
    name: 'PixelYDimension',
    group: 'other',
    category: 'ifd'
  },
  0xa004: {
    id: 0xa004,
    name: 'RelatedSoundFile',
    group: 'other',
    category: 'ifd'
  },
  0xa005: {
    id: 0xa005,
    name: 'InteroperabilityIFDPointer',
    group: 'pointer',
    category: 'pointer'
  },
  0xa20b: {
    id: 0xa20b,
    name: 'FlashEnergy',
    group: 'other',
    category: 'ifd'
  },
  0xa20c: {
    id: 0xa20c,
    name: 'SpatialFrequencyResponse',
    group: 'other',
    category: 'ifd'
  },
  0xa20e: {
    id: 0xa20e,
    name: 'FocalPlaneXResolution',
    group: 'other',
    category: 'ifd'
  },
  0xa20f: {
    id: 0xa20f,
    name: 'FocalPlaneYResolution',
    group: 'other',
    category: 'ifd'
  },
  0xa210: {
    id: 0xa210,
    name: 'FocalPlaneResolutionUnit',
    group: 'other',
    category: 'ifd'
  },
  0xa214: {
    id: 0xa214,
    name: 'SubjectLocation',
    group: 'other',
    category: 'ifd'
  },
  0xa215: {
    id: 0xa215,
    name: 'ExposureIndex',
    group: 'other',
    category: 'ifd'
  },
  0xa217: {
    id: 0xa217,
    name: 'SensingMethod',
    group: 'other',
    category: 'ifd'
  },
  0xa300: {
    id: 0xa300,
    name: 'FileSource',
    group: 'other',
    category: 'ifd'
  },
  0xa301: {
    id: 0xa301,
    name: 'SceneType',
    group: 'other',
    category: 'ifd'
  },
  0xa302: {
    id: 0xa302,
    name: 'CFAPattern',
    group: 'other',
    category: 'ifd'
  },
  0xa401: {
    id: 0xa401,
    name: 'CustomRendered',
    group: 'other',
    category: 'ifd'
  },
  0xa402: {
    id: 0xa402,
    name: 'ExposureMode',
    group: 'photograph',
    category: 'ifd'
  },
  0xa403: {
    id: 0xa403,
    name: 'WhiteBalance',
    group: 'photograph',
    category: 'ifd'
  },
  0xa404: {
    id: 0xa404,
    name: 'DigitalZoomRatio',
    group: 'other',
    category: 'ifd'
  },
  0xa405: {
    id: 0xa405,
    name: 'FocalLengthIn35mmFilm',
    group: 'other',
    category: 'ifd'
  },
  0xa406: {
    id: 0xa406,
    name: 'SceneCaptureType',
    group: 'other',
    category: 'ifd'
  },
  0xa407: {
    id: 0xa407,
    name: 'GainControl',
    group: 'other',
    category: 'ifd'
  },
  0xa408: {
    id: 0xa408,
    name: 'Contrast',
    group: 'other',
    category: 'ifd'
  },
  0xa409: {
    id: 0xa409,
    name: 'Saturation',
    group: 'other',
    category: 'ifd'
  },
  0xa40a: {
    id: 0xa40a,
    name: 'Sharpness',
    group: 'other',
    category: 'ifd'
  },
  0xa40b: {
    id: 0xa40b,
    name: 'DeviceSettingDescription',
    group: 'other',
    category: 'ifd'
  },
  0xa40c: {
    id: 0xa40c,
    name: 'SubjectDistanceRange',
    group: 'other',
    category: 'ifd'
  },
  0xa420: {
    id: 0xa420,
    name: 'ImageUniqueID',
    group: 'other',
    category: 'ifd'
  },
  0xa430: {
    id: 0xa430,
    name: 'CameraOwnerName',
    group: 'other',
    category: 'ifd'
  },
  0xa431: {
    id: 0xa431,
    name: 'BodySerialNumber',
    group: 'other',
    category: 'ifd'
  },
  0xa432: {
    id: 0xa432,
    name: 'LensSpecification',
    group: 'other',
    category: 'ifd'
  },
  0xa433: {
    id: 0xa433,
    name: 'LensMake',
    group: 'other',
    category: 'ifd'
  },
  0xa434: {
    id: 0xa434,
    name: 'LensModel',
    group: 'other',
    category: 'ifd'
  },
  0xa435: {
    id: 0xa435,
    name: 'LensSerialNumber',
    group: 'other',
    category: 'ifd'
  },
  0xa500: {
    id: 0xa500,
    name: 'Gamma',
    group: 'other',
    category: 'ifd'
  },
  0xea1d: {
    id: 0xea1d,
    name: 'OffsetSchema',
    group: 'other',
    category: 'ifd'
  }
}

/**
 * EXIF IFD tags.
 * @type {Object.<number, string>}
 */
export const exifIfdTags = Object
  .values(allTagsFull)
  .filter(tag => tag.category === 'ifd')
  .reduce((acc, tag) => ({ ...acc, [tag.id]: tag.name }), {})

/**
 * EXIF pointer tags.
 * @type {Object.<number, string>}
 */
export const exifPointerTags = Object
  .values(allTagsFull)
  .filter(tag => tag.category === 'pointer')
  .reduce((acc, tag) => ({ ...acc, [tag.id]: tag.name }), {})

/**
 * GPS tags.
 * @type {Object.<number, string>}
 */
export const gpsTags = Object
  .values(allTagsFull)
  .filter(tag => tag.category === 'gps')
  .reduce((acc, tag) => ({ ...acc, [tag.id]: tag.name }), {})

/**
 * TIFF tags.
 * @type {Object.<number, string>}
 */
export const tiffTags = Object
  .values(allTagsFull)
  .filter(tag => tag.category === 'tiff')
  .reduce((acc, tag) => ({ ...acc, [tag.id]: tag.name }), {})

/**
 * All EXIF tags in a single object.
 * @type {Object.<number, string>}
 */
export const allTags = Object
  .values(allTagsFull)
  .reduce((acc, tag) => ({ ...acc, [tag.id]: tag.name }), {})
