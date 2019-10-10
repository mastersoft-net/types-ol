import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';

export default class JSONFeature extends FeatureFormat {
    constructor();
    protected readFeatureFromObject(object: any, opt_options?: ReadOptions): Feature<GeomType>;
    protected readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature<GeomType>[];
    protected readGeometryFromObject(object: any, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromObject(object: any): Projection;
    readFeature(source: ArrayBuffer | Document | Node | object | string, opt_options?: ReadOptions): Feature<GeomType>;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(
        source: ArrayBuffer | Document | Node | object | string,
        opt_options?: ReadOptions,
    ): Feature<GeomType>[];
    readFeatures(source: Document | Node | ArrayBuffer | object | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: ArrayBuffer | Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: ArrayBuffer | Document | Node | object | string): Projection;
    readProjection(source: Document | Node | object | string): Projection;
    writeFeature(feature: Feature<GeomType>, opt_options?: WriteOptions): string;
    writeFeatureObject(feature: Feature<GeomType>, opt_options?: WriteOptions): any;
    writeFeatures(features: Feature<GeomType>[], opt_options?: WriteOptions): string;
    writeFeaturesObject(features: Feature<GeomType>[], opt_options?: WriteOptions): any;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): any;
}
