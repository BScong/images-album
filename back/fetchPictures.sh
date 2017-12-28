for i in `seq 1 20`; do
	wget 'https://loremflickr.com/6000/6000'
	mv '6000' 'pictures/'${i}'.jpg'
done