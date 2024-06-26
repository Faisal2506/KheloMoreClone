import { View } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default function HomeSlider({data}) {
  return (
    <Carousel
      data={data}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      // firstItem={1}
      autoplayInterval={2000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) -80, height: 150 }}>
      <ParallaxImage
        source={item}
        key={index}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        className="rounded-b-[15px]"
        style={{ resizeMode: 'contain' }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};
