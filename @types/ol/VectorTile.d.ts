import Feature, { FeatureLike } from './Feature';
import { FeatureLoader } from './featureloader';
import FeatureFormat from './format/Feature';
import Projection from './proj/Projection';
import Tile, { LoadFunction, Options } from './Tile';
import { TileCoord } from './tilecoord';
import TileState from './TileState';

export default class VectorTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        format: FeatureFormat,
        tileLoadFunction: LoadFunction,
        opt_options?: Options,
    );
    getFeatures(): FeatureLike[];
    getFormat(): FeatureFormat;
    onError(): void;
    onLoad(features: Feature<GeomType>[], dataProjection: Projection): void;
    setFeatures(features: Feature<GeomType>[]): void;
    setLoader(loader: FeatureLoader): void;
}
