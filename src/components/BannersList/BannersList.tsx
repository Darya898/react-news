import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { INews } from '@/interfaces';

interface Props {
  banners?: INews[] | null;
}
const BannersList = ({ banners }: Props) => {
  return (
    <ul className={`${styles.banners}`}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const NewsBannerListWithSkeleton = withSkeleton<Props>(
  BannersList,
  'banner',
  10,
  'row'
);
export default NewsBannerListWithSkeleton;
