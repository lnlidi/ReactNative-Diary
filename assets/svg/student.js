import Svg, { Path } from 'react-native-svg'

const Student = ({ size, color }) => {
	return (
		<Svg fill={color ? color : '#000000'} width={size} height={size}
			viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'
		>
			<Path d='M226.52979,56.41016l-96-32a8.00672,8.00672,0,0,0-5.05958,0L29.6239,56.35889l-.00976.00341-.14393.04786c-.02819.00927-.053.02465-.08105.03442a7.91407,7.91407,0,0,0-1.01074.42871c-.03748.019-.07642.03516-.11353.05469a7.97333,7.97333,0,0,0-.93139.58325c-.06543.04688-.129.09522-.19288.144a8.09113,8.09113,0,0,0-.81872.71119c-.02374.02416-.04443.05053-.06787.0747a8.03121,8.03121,0,0,0-.66107.783c-.04157.05567-.0846.10986-.12476.16675a8.00867,8.00867,0,0,0-.56714.92993c-.02582.04981-.04809.10083-.07287.15112a7.93932,7.93932,0,0,0-.40522.97608c-.01062.03149-.0238.06128-.034.093a7.95072,7.95072,0,0,0-.26288,1.08544c-.01337.07666-.024.15308-.0351.23A8.02889,8.02889,0,0,0,24,64v80a8,8,0,0,0,16,0V75.09985L73.58514,86.29492a63.97188,63.97188,0,0,0,20.42945,87.89746,95.88127,95.88127,0,0,0-46.48383,37.4375,7.9997,7.9997,0,1,0,13.40235,8.73828,80.023,80.023,0,0,1,134.1333,0,7.99969,7.99969,0,1,0,13.40234-8.73828,95.87928,95.87928,0,0,0-46.48346-37.43725,63.97209,63.97209,0,0,0,20.42957-87.89771l44.11493-14.70508a8.0005,8.0005,0,0,0,0-15.17968ZM176,120A48,48,0,1,1,89.34875,91.54932l36.12146,12.04052a8.00672,8.00672,0,0,0,5.05958,0l36.12146-12.04052A47.85424,47.85424,0,0,1,176,120Zm-9.29791-45.3335c-.01984.00708-.03992.01294-.05976.02L128,87.56738,89.35785,74.68652c-.02033-.00732-.04083-.01318-.06122-.0205L57.29834,64,128,40.43262,198.70166,64Z' />
		</Svg>
	)
}
export default Student
