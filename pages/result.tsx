'use client'
import './tableStyle.css'
function analyseResult() {
	let fetchedResult = [
		{
			placeId: 'ChIJv_pqj73LRIYRAL-vjIh_BS4',
			address: '8601 Burnet Rd',
			category: 'Auto repair shop',
			phone: '(512) 690-4774',
			googleUrl:
				'https://www.google.com/maps/place/Tech+One+Automotive/data=!4m7!3m6!1s0x8644cbbd8f6afabf:0x2e057f888cafbf00!8m2!3d30.3678371!4d-97.7273065!16s%2Fg%2F1vc_qrmr!19sChIJv_pqj73LRIYRAL-vjIh_BS4?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.techoneauto.com/?utm_campaign=gmb',
			storeName: 'Tech One Automotive',
			ratingText: '4.8 stars 834 Reviews',
			stars: 4.8,
			numberOfReviews: 834
		},
		{
			placeId: 'ChIJ93MQ3KZMW4YR3f5wEK7m69s',
			address: '1417 W William Cannon Dr',
			category: 'Auto repair shop',
			phone: '(512) 440-8878',
			googleUrl:
				'https://www.google.com/maps/place/Austin%27s+Automotive+Specialists/data=!4m7!3m6!1s0x865b4ca6dc1073f7:0xdbebe6ae1070fedd!8m2!3d30.200386!4d-97.8003864!16s%2Fg%2F1tgjlq8m!19sChIJ93MQ3KZMW4YR3f5wEK7m69s?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://austinsautomotivespecialists.com/1417-west-william-cannon-drive/',
			storeName: "Austin's Automotive Specialists",
			ratingText: '4.8 stars 1,001 Reviews',
			stars: 4.8,
			numberOfReviews: null
		},
		{
			placeId: 'ChIJ7b7Sj7W0RIYRnqKP004d43c',
			address: '4313 Gillis St',
			category: 'Auto repair shop',
			phone: '(512) 326-3881',
			googleUrl:
				'https://www.google.com/maps/place/Auto+Tek/data=!4m7!3m6!1s0x8644b4b58fd2beed:0x77e31d4ed38fa29e!8m2!3d30.2266028!4d-97.7814457!16s%2Fg%2F1tfx58jn!19sChIJ7b7Sj7W0RIYRnqKP004d43c?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://autotekinc.net/',
			storeName: 'Auto Tek',
			ratingText: '4.9 stars 669 Reviews',
			stars: 4.9,
			numberOfReviews: 669
		},
		{
			placeId: 'ChIJt_Kkxz3ORIYRyR9LR9hVz8M',
			address: '10410 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 358-6707',
			googleUrl:
				'https://www.google.com/maps/place/Austin+DIY+Shop/data=!4m7!3m6!1s0x8644ce3dc7a4f2b7:0xc3cf55d8474b1fc9!8m2!3d30.3735066!4d-97.6919293!16s%2Fg%2F12ls_j_th!19sChIJt_Kkxz3ORIYRyR9LR9hVz8M?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.diyatx.com/',
			storeName: 'Austin DIY Shop',
			ratingText: '4.9 stars 284 Reviews',
			stars: 4.9,
			numberOfReviews: 284
		},
		{
			placeId: 'ChIJTTspeaYyW4YRY-_6EHWSEbs',
			address: '12990 Research Blvd',
			category: 'Auto repair shop',
			phone: '(512) 331-5166',
			googleUrl:
				'https://www.google.com/maps/place/Austin%27s+Automotive+Specialists/data=!4m7!3m6!1s0x865b32a679293b4d:0xbb11927510faef63!8m2!3d30.4371393!4d-97.7769725!16s%2Fg%2F11gz9mfks!19sChIJTTspeaYyW4YRY-_6EHWSEbs?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://austinsautomotivespecialists.com/12990-research-blvd/',
			storeName: "Austin's Automotive Specialists",
			ratingText: '4.8 stars 612 Reviews',
			stars: 4.8,
			numberOfReviews: 612
		},
		{
			placeId: 'ChIJL2flLRjMRIYRQXXB9ynyfyI',
			address: '12186 N Mopac Expy',
			category: 'Auto repair shop',
			phone: '(512) 836-6724',
			googleUrl:
				'https://www.google.com/maps/place/All+Tune+and+Lube+Total+Car+Care/data=!4m7!3m6!1s0x8644cc182de5672f:0x227ff229f7c17541!8m2!3d30.4135676!4d-97.7087885!16s%2Fg%2F119vr_9h_!19sChIJL2flLRjMRIYRQXXB9ynyfyI?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.atlaustin.com/',
			storeName: 'All Tune and Lube Total Car Care',
			ratingText: '4.8 stars 280 Reviews',
			stars: 4.8,
			numberOfReviews: 280
		},
		{
			placeId: 'ChIJDd_CYFrJRIYR4sTXg9ZtB6s',
			address: '903 Kramer Ln',
			category: 'Auto repair shop',
			phone: '(512) 837-3714',
			googleUrl:
				'https://www.google.com/maps/place/Luu+Auto+Repair+%26+Body+Shop/data=!4m7!3m6!1s0x8644c95a60c2df0d:0xab076dd683d7c4e2!8m2!3d30.3804966!4d-97.6902368!16s%2Fg%2F1tq6dwrz!19sChIJDd_CYFrJRIYR4sTXg9ZtB6s?authuser=0&hl=en&rclk=1',
			storeName: 'Luu Auto Repair & Body Shop',
			ratingText: '4.9 stars 110 Reviews',
			stars: 4.9,
			numberOfReviews: 110
		},
		{
			placeId: 'ChIJmRM6gBfMRIYR0uEGvhaPNFg',
			address: '12172 N Mopac Expy',
			category: 'Auto repair shop',
			phone: '(512) 836-6615',
			googleUrl:
				'https://www.google.com/maps/place/Riethmeyer%27s+Auto+Repair/data=!4m7!3m6!1s0x8644cc17803a1399:0x58348f16be06e1d2!8m2!3d30.4128016!4d-97.7096369!16s%2Fg%2F1tf65w8k!19sChIJmRM6gBfMRIYR0uEGvhaPNFg?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.riethmeyerauto.com/',
			storeName: "Riethmeyer's Auto Repair",
			ratingText: '4.9 stars 181 Reviews',
			stars: 4.9,
			numberOfReviews: 181
		},
		{
			placeId: 'ChIJU3SGPoC2RIYRz7U9FjGpEyk',
			address: '924 Shady Ln',
			category: 'Auto repair shop',
			phone: '(512) 385-5853',
			googleUrl:
				'https://www.google.com/maps/place/Juke+Auto/data=!4m7!3m6!1s0x8644b6803e867453:0x2913a931163db5cf!8m2!3d30.2589491!4d-97.694212!16s%2Fg%2F1tg_xg_g!19sChIJU3SGPoC2RIYRz7U9FjGpEyk?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.jukeauto.com/',
			storeName: 'Juke Auto',
			ratingText: '4.7 stars 830 Reviews',
			stars: 4.7,
			numberOfReviews: 830
		},
		{
			placeId: 'ChIJBcDgVF7KRIYRiY0OnZCYBbQ',
			address: '5220A Jim Hogg Ave',
			category: 'Auto repair shop',
			phone: '(512) 467-1255',
			googleUrl:
				'https://www.google.com/maps/place/Century+Automotive/data=!4m7!3m6!1s0x8644ca5e54e0c005:0xb40598909d0e8d89!8m2!3d30.3247332!4d-97.7387378!16s%2Fg%2F1tqyfx3_!19sChIJBcDgVF7KRIYRiY0OnZCYBbQ?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://centuryautomotive.business.site/',
			storeName: 'Century Automotive',
			ratingText: '4.9 stars 146 Reviews',
			stars: 4.9,
			numberOfReviews: 146
		},
		{
			placeId: 'ChIJiZ8yEtLLRIYR3XniWLkM1yw',
			address: '8225 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 837-1417',
			googleUrl:
				'https://www.google.com/maps/place/Luu+Auto+Repair/data=!4m7!3m6!1s0x8644cbd212329f89:0x2cd70cb958e279dd!8m2!3d30.3511742!4d-97.7080048!16s%2Fg%2F1twyzyll!19sChIJiZ8yEtLLRIYR3XniWLkM1yw?authuser=0&hl=en&rclk=1',
			storeName: 'Luu Auto Repair',
			ratingText: '5.0 stars 142 Reviews',
			stars: 5,
			numberOfReviews: 142
		},
		{
			placeId: 'ChIJLRx-AH_KRIYR2MkJLIU8KUo',
			address: '3512 Guadalupe St',
			category: 'Auto repair shop',
			phone: '(512) 459-9917',
			googleUrl:
				'https://www.google.com/maps/place/Flamingo+Automotive/data=!4m7!3m6!1s0x8644ca7f007e1c2d:0x4a293c852c09c9d8!8m2!3d30.301954!4d-97.739014!16s%2Fg%2F1th7n8vv!19sChIJLRx-AH_KRIYR2MkJLIU8KUo?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://flamingoautomotive.com/',
			storeName: 'Flamingo Automotive',
			ratingText: '4.7 stars 193 Reviews',
			stars: 4.7,
			numberOfReviews: 193
		},
		{
			placeId: 'ChIJBUHnEWbKRIYR8pi2f051h58',
			address: '4926 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 872-5547',
			googleUrl:
				'https://www.google.com/maps/place/Dave%27s+Ultimate+Automotive/data=!4m7!3m6!1s0x8644ca6611e74105:0x9f87754e7fb698f2!8m2!3d30.3181679!4d-97.7315495!16s%2Fg%2F1tkbym2w!19sChIJBUHnEWbKRIYR8pi2f051h58?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://davesultimateautomotive.com/central-austin/',
			storeName: "Dave's Ultimate Automotive",
			ratingText: '4.6 stars 636 Reviews',
			stars: 4.6,
			numberOfReviews: 636
		},
		{
			placeId: 'ChIJlaoXd7m0RIYR2D7x3xj6YBU',
			address: '2617 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 881-7210',
			googleUrl:
				'https://www.google.com/maps/place/Dave%27s+Ultimate+Automotive/data=!4m7!3m6!1s0x8644b4b97717aa95:0x1560fa18dff13ed8!8m2!3d30.2383816!4d-97.7617441!16s%2Fg%2F1v9t_8y_!19sChIJlaoXd7m0RIYR2D7x3xj6YBU?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://davesultimateautomotive.com/south-austin/',
			storeName: "Dave's Ultimate Automotive",
			ratingText: '4.7 stars 610 Reviews',
			stars: 4.7,
			numberOfReviews: 610
		},
		{
			placeId: 'ChIJdelg9HizRIYR9YEkoHkcFLA',
			address: '6534 S Congress Ave',
			category: 'Auto repair shop',
			phone: '(737) 260-7544',
			googleUrl:
				'https://www.google.com/maps/place/Eurofed+Automotive/data=!4m7!3m6!1s0x8644b378f460e975:0xb0141c79a02481f5!8m2!3d30.1946315!4d-97.7786483!16s%2Fg%2F11fmt_9csk!19sChIJdelg9HizRIYR9YEkoHkcFLA?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://eurofedtexas.com/',
			storeName: 'Eurofed Automotive',
			ratingText: '4.8 stars 228 Reviews',
			stars: 4.8,
			numberOfReviews: 228
		},
		{
			placeId: 'ChIJ3T7308VMW4YRm1V2EDxxtMI',
			address: '8811 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 840-0066',
			googleUrl:
				'https://www.google.com/maps/place/Lopez+Auto+Repair/data=!4m7!3m6!1s0x865b4cc5d3f73edd:0xc2b4713c1076559b!8m2!3d30.1747237!4d-97.79861!16s%2Fg%2F11cjp60k3b!19sChIJ3T7308VMW4YRm1V2EDxxtMI?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.lopezautorepair.com/',
			storeName: 'Lopez Auto Repair',
			ratingText: '4.6 stars 145 Reviews',
			stars: 4.6,
			numberOfReviews: 145
		},
		{
			placeId: 'ChIJEw2OXRfKRIYRHUjwCeXZ4Jw',
			address: '9807 Beck Cir',
			category: 'Auto repair shop',
			phone: '(512) 904-0130',
			googleUrl:
				'https://www.google.com/maps/place/Buddha%27s+Garage/data=!4m7!3m6!1s0x8644ca175d8e0d13:0x9ce0d9e509f0481d!8m2!3d30.3769076!4d-97.7123379!16s%2Fg%2F1tfmcmkd!19sChIJEw2OXRfKRIYRHUjwCeXZ4Jw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://buddhasgarageatx.com/',
			storeName: "Buddha's Garage",
			ratingText: '4.8 stars 210 Reviews',
			stars: 4.8,
			numberOfReviews: 210
		},
		{
			placeId: 'ChIJGQE5GdLLRIYRvyvk19nD_BE',
			address: '8300 N Lamar Blvd Suite 100',
			category: 'Auto repair shop',
			phone: '(512) 222-8867',
			googleUrl:
				'https://www.google.com/maps/place/Luxury+Auto+Works+-+Austin/data=!4m7!3m6!1s0x8644cbd219390119:0x11fcc3d9d7e42bbf!8m2!3d30.352068!4d-97.708129!16s%2Fg%2F1tpc8c0l!19sChIJGQE5GdLLRIYRvyvk19nD_BE?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.luxuryautoworks.com/?utm_campaign=gmb',
			storeName: 'Luxury Auto Works - Austin',
			ratingText: '4.6 stars 626 Reviews',
			stars: 4.6,
			numberOfReviews: 626
		},
		{
			placeId: 'ChIJ5eYCI5EyW4YRqB5nH-dDkgc',
			address: '4918 Hamilton Rd',
			category: 'Auto repair shop',
			phone: '(512) 343-7711',
			googleUrl:
				'https://www.google.com/maps/place/Auto+Techs/data=!4m7!3m6!1s0x865b32912302e6e5:0x79243e71f671ea8!8m2!3d30.4029099!4d-97.7468075!16s%2Fg%2F1tdgvtl7!19sChIJ5eYCI5EyW4YRqB5nH-dDkgc?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.austinautotechs.com/',
			storeName: 'Auto Techs',
			ratingText: '4.7 stars 255 Reviews',
			stars: 4.7,
			numberOfReviews: 255
		},
		{
			placeId: 'ChIJUxzYec61RIYRpED3WS-tjGw',
			address: '2700 E 7th St',
			category: 'Auto repair shop',
			phone: '(512) 482-9800',
			googleUrl:
				'https://www.google.com/maps/place/All+Points+Auto+Electric/data=!4m7!3m6!1s0x8644b5ce79d81c53:0x6c8cad2f59f740a4!8m2!3d30.2608408!4d-97.7113428!16s%2Fg%2F1tdp5fg1!19sChIJUxzYec61RIYRpED3WS-tjGw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.theautoelectric.com/',
			storeName: 'All Points Auto Electric',
			ratingText: '4.9 stars 357 Reviews',
			stars: 4.9,
			numberOfReviews: 357
		},
		{
			placeId: 'ChIJUxzYec61RIYRpED3WS-tjGw',
			address: '2700 E 7th St',
			category: 'Auto repair shop',
			phone: '(512) 482-9800',
			googleUrl:
				'https://www.google.com/maps/place/All+Points+Auto+Electric/data=!4m7!3m6!1s0x8644b5ce79d81c53:0x6c8cad2f59f740a4!8m2!3d30.2608408!4d-97.7113428!16s%2Fg%2F1tdp5fg1!19sChIJUxzYec61RIYRpED3WS-tjGw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.theautoelectric.com/',
			storeName: 'All Points Auto Electric',
			ratingText: '4.9 stars 357 Reviews',
			stars: 4.9,
			numberOfReviews: 357
		},
		{
			placeId: 'ChIJ0SnrKjO0RIYRCg9HH9d0gqE',
			address: '209 N Pleasant Valley Rd',
			category: 'Auto repair shop',
			phone: '(512) 766-2886',
			googleUrl:
				'https://www.google.com/maps/place/766+Auto+Inc/data=!4m7!3m6!1s0x8644b4332aeb29d1:0xa18274d71f470f0a!8m2!3d30.2545641!4d-97.7118394!16s%2Fg%2F1tksj5ln!19sChIJ0SnrKjO0RIYRCg9HH9d0gqE?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.766auto.com/',
			storeName: '766 Auto Inc',
			ratingText: '4.3 stars 209 Reviews',
			stars: 4.3,
			numberOfReviews: 209
		},
		{
			placeId: 'ChIJkR0uHy7NRIYRLNLW9OY80Ts',
			address: '13200 Pond Springs Rd C5',
			category: 'Auto repair shop',
			phone: '(512) 601-8246',
			googleUrl:
				'https://www.google.com/maps/place/Northwest+Imports/data=!4m7!3m6!1s0x8644cd2e1f2e1d91:0x3bd13ce6f4d6d22c!8m2!3d30.4448603!4d-97.7792154!16s%2Fg%2F1w6r8p13!19sChIJkR0uHy7NRIYRLNLW9OY80Ts?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://nwimports.com/',
			storeName: 'Northwest Imports',
			ratingText: '5.0 stars 463 Reviews',
			stars: 5,
			numberOfReviews: 463
		},
		{
			placeId: 'ChIJdelg9HizRIYR9YEkoHkcFLA',
			address: '6534 S Congress Ave',
			category: 'Auto repair shop',
			phone: '(737) 260-7544',
			googleUrl:
				'https://www.google.com/maps/place/Eurofed+Automotive/data=!4m7!3m6!1s0x8644b378f460e975:0xb0141c79a02481f5!8m2!3d30.1946315!4d-97.7786483!16s%2Fg%2F11fmt_9csk!19sChIJdelg9HizRIYR9YEkoHkcFLA?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://eurofedtexas.com/',
			storeName: 'Eurofed Automotive',
			ratingText: '4.8 stars 228 Reviews',
			stars: 4.8,
			numberOfReviews: 228
		},
		{
			placeId: 'ChIJlaoXd7m0RIYR2D7x3xj6YBU',
			address: '2617 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 881-7210',
			googleUrl:
				'https://www.google.com/maps/place/Dave%27s+Ultimate+Automotive/data=!4m7!3m6!1s0x8644b4b97717aa95:0x1560fa18dff13ed8!8m2!3d30.2383816!4d-97.7617441!16s%2Fg%2F1v9t_8y_!19sChIJlaoXd7m0RIYR2D7x3xj6YBU?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://davesultimateautomotive.com/south-austin/',
			storeName: "Dave's Ultimate Automotive",
			ratingText: '4.7 stars 610 Reviews',
			stars: 4.7,
			numberOfReviews: 610
		},
		{
			placeId: 'ChIJlc2kaqPORIYRFwte2c4vyyA',
			address: '1607 W Parmer Ln',
			category: 'Auto repair shop',
			phone: '(512) 834-0604',
			googleUrl:
				'https://www.google.com/maps/place/Austin%27s+Automotive+Specialists/data=!4m7!3m6!1s0x8644cea36aa4cd95:0x20cb2fced95e0b17!8m2!3d30.4118918!4d-97.6890258!16s%2Fg%2F1thl5twr!19sChIJlc2kaqPORIYRFwte2c4vyyA?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://austinsautomotivespecialists.com/1607-west-parmer/',
			storeName: "Austin's Automotive Specialists",
			ratingText: '4.6 stars 1,211 Reviews',
			stars: 4.6,
			numberOfReviews: null
		},
		{
			placeId: 'ChIJH1nGN1TKRIYRNEJgMrSQqjs',
			address: '6515 Burnet Rd',
			category: 'Auto repair shop',
			phone: '(512) 669-2833',
			googleUrl:
				'https://www.google.com/maps/place/Longhorn+Automotive/data=!4m7!3m6!1s0x8644ca5437c6591f:0x3baa90b432604234!8m2!3d30.3405253!4d-97.7384313!16s%2Fg%2F11b88n2c7k!19sChIJH1nGN1TKRIYRNEJgMrSQqjs?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.longhornautomotive.com/',
			storeName: 'Longhorn Automotive',
			ratingText: '4.7 stars 118 Reviews',
			stars: 4.7,
			numberOfReviews: 118
		},
		{
			placeId: 'ChIJLRx-AH_KRIYR2MkJLIU8KUo',
			address: '3512 Guadalupe St',
			category: 'Auto repair shop',
			phone: '(512) 459-9917',
			googleUrl:
				'https://www.google.com/maps/place/Flamingo+Automotive/data=!4m7!3m6!1s0x8644ca7f007e1c2d:0x4a293c852c09c9d8!8m2!3d30.301954!4d-97.739014!16s%2Fg%2F1th7n8vv!19sChIJLRx-AH_KRIYR2MkJLIU8KUo?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://flamingoautomotive.com/',
			storeName: 'Flamingo Automotive',
			ratingText: '4.7 stars 193 Reviews',
			stars: 4.7,
			numberOfReviews: 193
		},
		{
			placeId: 'ChIJEw2OXRfKRIYRHUjwCeXZ4Jw',
			address: '9807 Beck Cir',
			category: 'Auto repair shop',
			phone: '(512) 904-0130',
			googleUrl:
				'https://www.google.com/maps/place/Buddha%27s+Garage/data=!4m7!3m6!1s0x8644ca175d8e0d13:0x9ce0d9e509f0481d!8m2!3d30.3769076!4d-97.7123379!16s%2Fg%2F1tfmcmkd!19sChIJEw2OXRfKRIYRHUjwCeXZ4Jw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://buddhasgarageatx.com/',
			storeName: "Buddha's Garage",
			ratingText: '4.8 stars 210 Reviews',
			stars: 4.8,
			numberOfReviews: 210
		},
		{
			placeId: 'ChIJgXIm2VrJRIYR_oXkUdSKY80',
			address: '11008 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 601-5153',
			googleUrl:
				'https://www.google.com/maps/place/Swedish+Auto+Service/data=!4m7!3m6!1s0x8644c95ad9267281:0xcd638ad451e485fe!8m2!3d30.3795799!4d-97.6881996!16s%2Fg%2F1tfjlj4n!19sChIJgXIm2VrJRIYR_oXkUdSKY80?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://swedishautoservice.com/',
			storeName: 'Swedish Auto Service',
			ratingText: '4.7 stars 284 Reviews',
			stars: 4.7,
			numberOfReviews: 284
		},
		{
			placeId: 'ChIJNQA-UFrJRIYR3jqDeiPaNps',
			address: '904 Prairie Trail',
			category: 'Auto repair shop',
			phone: '(512) 821-1360',
			googleUrl:
				'https://www.google.com/maps/place/5Star+Auto/data=!4m7!3m6!1s0x8644c95a503e0035:0x9b36da237a833ade!8m2!3d30.3800123!4d-97.6906406!16s%2Fg%2F1v_0k44l!19sChIJNQA-UFrJRIYR3jqDeiPaNps?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://5starautotx.com/',
			storeName: '5Star Auto',
			ratingText: '4.9 stars 254 Reviews',
			stars: 4.9,
			numberOfReviews: 254
		},
		{
			placeId: 'ChIJb5Lw1JW0RIYRf7-4IBfemzw',
			address: '3902 Woodbury Dr',
			category: 'Auto repair shop',
			phone: '(512) 442-3363',
			googleUrl:
				'https://www.google.com/maps/place/Brownie%27s+Automotive/data=!4m7!3m6!1s0x8644b495d4f0926f:0x3c9bde1720b8bf7f!8m2!3d30.2235136!4d-97.7609363!16s%2Fg%2F1tr8lzhf!19sChIJb5Lw1JW0RIYRf7-4IBfemzw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://browniesautomotive.wixsite.com/my-site',
			storeName: "Brownie's Automotive",
			ratingText: '4.9 stars 63 Reviews',
			stars: 4.9,
			numberOfReviews: 63
		},
		{
			placeId: 'ChIJhaTnjgTNRIYRB74d5drVbZE',
			address: '6750 Corpus Christi Dr',
			category: 'Auto repair shop',
			phone: '(512) 335-4343',
			googleUrl:
				'https://www.google.com/maps/place/Sun+Auto+Service/data=!4m7!3m6!1s0x8644cd048ee7a485:0x916dd5dae51dbe07!8m2!3d30.4418533!4d-97.7504719!16s%2Fg%2F1tq4rgvk!19sChIJhaTnjgTNRIYRB74d5drVbZE?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://www.sunautoservice.com/locations/tx/austin/auto-repair-4023.html',
			storeName: 'Sun Auto Service',
			ratingText: '4.7 stars 591 Reviews',
			stars: 4.7,
			numberOfReviews: 591
		},
		{
			placeId: 'ChIJaYtS8_FIW4YRnZGID372Vhs',
			address: '9324 US-290',
			category: 'Auto repair shop',
			phone: '(512) 865-6217',
			googleUrl:
				'https://www.google.com/maps/place/Austin+Auto+Repair/data=!4m7!3m6!1s0x865b48f1f3528b69:0x1b56f67e0f88919d!8m2!3d30.2317701!4d-97.9316147!16s%2Fg%2F1vj5_mm0!19sChIJaYtS8_FIW4YRnZGID372Vhs?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.autorepairsaustin.net/',
			storeName: 'Austin Auto Repair',
			ratingText: '4.8 stars 65 Reviews',
			stars: 4.8,
			numberOfReviews: 65
		},
		{
			placeId: 'ChIJSR23PQzKRIYRz-z7GjA7faM',
			address: '4801 Airport Blvd',
			category: 'Auto repair shop',
			phone: '(512) 453-7376',
			googleUrl:
				'https://www.google.com/maps/place/M+E+Gene+Johnson+Garage/data=!4m7!3m6!1s0x8644ca0c3db71d49:0xa37d3b301afbeccf!8m2!3d30.307758!4d-97.715357!16s%2Fg%2F1td4vnwy!19sChIJSR23PQzKRIYRz-z7GjA7faM?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.megjgarage.com/',
			storeName: 'M E Gene Johnson Garage',
			ratingText: '4.7 stars 316 Reviews',
			stars: 4.7,
			numberOfReviews: 316
		},
		{
			placeId: 'ChIJGQE5GdLLRIYRvyvk19nD_BE',
			address: '8300 N Lamar Blvd Suite 100',
			category: 'Auto repair shop',
			phone: '(512) 222-8867',
			googleUrl:
				'https://www.google.com/maps/place/Luxury+Auto+Works+-+Austin/data=!4m7!3m6!1s0x8644cbd219390119:0x11fcc3d9d7e42bbf!8m2!3d30.352068!4d-97.708129!16s%2Fg%2F1tpc8c0l!19sChIJGQE5GdLLRIYRvyvk19nD_BE?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.luxuryautoworks.com/?utm_campaign=gmb',
			storeName: 'Luxury Auto Works - Austin',
			ratingText: '4.6 stars 626 Reviews',
			stars: 4.6,
			numberOfReviews: 626
		},
		{
			placeId: 'ChIJMSC2GcbLRIYRSQVkNFFjxPE',
			address: '8405 Research Blvd',
			category: 'Auto repair shop',
			phone: '(512) 339-4199',
			googleUrl:
				'https://www.google.com/maps/place/Austin%27s+Automotive+Specialists/data=!4m7!3m6!1s0x8644cbc619b62031:0xf1c4635134640549!8m2!3d30.3583122!4d-97.7155862!16s%2Fg%2F1tcwgcj5!19sChIJMSC2GcbLRIYRSQVkNFFjxPE?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://austinsautomotivespecialists.com/8405-research-blvd/',
			storeName: "Austin's Automotive Specialists",
			ratingText: '4.5 stars 529 Reviews',
			stars: 4.5,
			numberOfReviews: 529
		},
		{
			placeId: 'ChIJ0-USfCezRIYRyxRQpcscadM',
			address: '4508 Brandt Rd suite K',
			category: 'Auto repair shop',
			phone: '(512) 645-0009',
			googleUrl:
				'https://www.google.com/maps/place/Crank+Auto+Repair/data=!4m7!3m6!1s0x8644b3277c12e5d3:0xd3691ccba55014cb!8m2!3d30.160969!4d-97.7711654!16s%2Fg%2F11fzb0rsqc!19sChIJ0-USfCezRIYRyxRQpcscadM?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.crankautorepair.com/',
			storeName: 'Crank Auto Repair',
			ratingText: '4.8 stars 181 Reviews',
			stars: 4.8,
			numberOfReviews: 181
		},
		{
			placeId: 'ChIJd4fQxkfKRIYRgsaHYzme9T4',
			address: '6517 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 452-9678',
			googleUrl:
				'https://www.google.com/maps/place/Yost+Automotive+II/data=!4m7!3m6!1s0x8644ca47c6d08777:0x3ef59e396387c682!8m2!3d30.3332194!4d-97.7213542!16s%2Fg%2F1tfv5j3z!19sChIJd4fQxkfKRIYRgsaHYzme9T4?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.yostauto.com/',
			storeName: 'Yost Automotive II',
			ratingText: '4.8 stars 278 Reviews',
			stars: 4.8,
			numberOfReviews: 278
		},
		{
			placeId: 'ChIJbxPnVJa0RIYRmQKb2PMDcSY',
			address: '319 E Ben White Blvd',
			category: 'Auto repair shop',
			phone: '(512) 920-3943',
			googleUrl:
				'https://www.google.com/maps/place/Meineke+Car+Care+Center/data=!4m7!3m6!1s0x8644b49654e7136f:0x267103f3d89b0299!8m2!3d30.2204471!4d-97.7608886!16s%2Fg%2F11c1vknfr6!19sChIJbxPnVJa0RIYRmQKb2PMDcSY?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://www.meineke.com/locations/tx/austin-2664/?utm_source=google&utm_medium=organic&utm_campaign=gbp_website',
			storeName: 'Meineke Car Care Center',
			ratingText: '4.6 stars 314 Reviews',
			stars: 4.6,
			numberOfReviews: 314
		},
		{
			placeId: 'ChIJEzEvMYfORIYRoqTYLhWGqhw',
			address: '2711 W Howard Ln',
			category: 'Auto repair shop',
			phone: '(512) 881-9819',
			googleUrl:
				'https://www.google.com/maps/place/Dave%27s+Ultimate+Automotive/data=!4m7!3m6!1s0x8644ce87312f3113:0x1caa86152ed8a4a2!8m2!3d30.437211!4d-97.6923879!16s%2Fg%2F1tfg3gvc!19sChIJEzEvMYfORIYRoqTYLhWGqhw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://davesultimateautomotive.com/north-austin/',
			storeName: "Dave's Ultimate Automotive",
			ratingText: '4.7 stars 678 Reviews',
			stars: 4.7,
			numberOfReviews: 678
		},
		{
			placeId: 'ChIJ--fokMVLW4YRSfrLK5GR0ds',
			address: '5905 McCarty Ln',
			category: 'Auto repair shop',
			phone: '(512) 892-2447',
			googleUrl:
				'https://www.google.com/maps/place/Southwest+Automotive/data=!4m7!3m6!1s0x865b4bc590e8e7fb:0xdbd191912bcbfa49!8m2!3d30.2331982!4d-97.8581644!16s%2Fg%2F1tlbpks1!19sChIJ--fokMVLW4YRSfrLK5GR0ds?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://southwestautomotiveaustin.com/',
			storeName: 'Southwest Automotive',
			ratingText: '4.8 stars 76 Reviews',
			stars: 4.8,
			numberOfReviews: 76
		},
		{
			placeId: 'ChIJF9GscsvLRIYRX0lOuXuuL_c',
			address: '1007 W Anderson Ln.',
			category: 'Auto repair shop',
			phone: '(512) 467-7363',
			googleUrl:
				'https://www.google.com/maps/place/Uptown+Auto+Repair/data=!4m7!3m6!1s0x8644cbcb72acd117:0xf72fae7bb94e495f!8m2!3d30.3485984!4d-97.7157821!16s%2Fg%2F11b6gf6tjx!19sChIJF9GscsvLRIYRX0lOuXuuL_c?authuser=0&hl=en&rclk=1',
			storeName: 'Uptown Auto Repair',
			ratingText: '4.8 stars 103 Reviews',
			stars: 4.8,
			numberOfReviews: 103
		},
		{
			placeId: 'ChIJ03o_xLpJW4YRrIWvRpnnor8',
			address: '9301 State Hwy 71',
			category: 'Auto repair shop',
			phone: '(512) 288-3366',
			googleUrl:
				'https://www.google.com/maps/place/Oak+Hill+Automotive/data=!4m7!3m6!1s0x865b49bac43f7ad3:0xbfa2e79946af85ac!8m2!3d30.2587859!4d-97.9069579!16s%2Fg%2F1tczf9rr!19sChIJ03o_xLpJW4YRrIWvRpnnor8?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.oakhillautomotive.com/',
			storeName: 'Oak Hill Automotive',
			ratingText: '4.8 stars 428 Reviews',
			stars: 4.8,
			numberOfReviews: 428
		},
		{
			placeId: 'ChIJnU1GIpe0RIYRvQDmPd-ZQIo',
			address: '6401 S 1st St suite E',
			category: 'Auto repair shop',
			phone: '(512) 440-0409',
			googleUrl:
				'https://www.google.com/maps/place/Ben+White+Automotive/data=!4m7!3m6!1s0x8644b49722464d9d:0x8a4099df3de600bd!8m2!3d30.1999185!4d-97.7856181!16s%2Fg%2F1tcvpnn7!19sChIJnU1GIpe0RIYRvQDmPd-ZQIo?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://benwhiteautomotive.com/',
			storeName: 'Ben White Automotive',
			ratingText: '4.6 stars 304 Reviews',
			stars: 4.6,
			numberOfReviews: 304
		},
		{
			placeId: 'ChIJd2f2k1vJRIYRS4LkX-d2SuE',
			address: '10720 N Lamar Blvd',
			category: 'Auto body shop',
			googleUrl:
				'https://www.google.com/maps/place/Austin+Corvette/data=!4m7!3m6!1s0x8644c95b93f66777:0xe14a76e75fe4824b!8m2!3d30.3772386!4d-97.6909621!16s%2Fg%2F1tf2y5lc!19sChIJd2f2k1vJRIYRS4LkX-d2SuE?authuser=0&hl=en&rclk=1',
			storeName: 'Austin Corvette',
			ratingText: '4.5 stars 28 Reviews',
			stars: 4.5,
			numberOfReviews: 28
		},
		{
			placeId: 'ChIJOeWgKufMRIYRB0Qt9aQ_9ro',
			address: '12538 Research Blvd',
			category: 'Auto repair shop',
			phone: '(512) 506-8008',
			googleUrl:
				'https://www.google.com/maps/place/Oak+Knoll+Automotive/data=!4m7!3m6!1s0x8644cce72aa0e539:0xbaf63fa4f52d4407!8m2!3d30.4290956!4d-97.7611308!16s%2Fg%2F1tj1mxs4!19sChIJOeWgKufMRIYRB0Qt9aQ_9ro?authuser=0&hl=en&rclk=1',
			storeName: 'Oak Knoll Automotive',
			ratingText: '4.4 stars 80 Reviews',
			stars: 4.4,
			numberOfReviews: 80
		},
		{
			placeId: 'ChIJCSlF6sq0RIYRO5-LiE4xF24',
			address: '1700 Fort View Rd',
			category: 'Auto repair shop',
			phone: '(737) 258-7522',
			googleUrl:
				'https://www.google.com/maps/place/Terry+Sayther+Automotive/data=!4m7!3m6!1s0x8644b4caea452909:0x6e17314e888b9f3b!8m2!3d30.2294096!4d-97.7839239!16s%2Fg%2F1vvr6ltv!19sChIJCSlF6sq0RIYRO5-LiE4xF24?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.terrysaytherauto.com/',
			storeName: 'Terry Sayther Automotive',
			ratingText: '4.9 stars 975 Reviews',
			stars: 4.9,
			numberOfReviews: 975
		},
		{
			placeId: 'ChIJITi9qkTJRIYRDQX4Nd6qreQ',
			address: '601 Ferguson Dr',
			category: 'Auto repair shop',
			phone: '(512) 837-8682',
			googleUrl:
				'https://www.google.com/maps/place/T%26T+Auto+Repair/data=!4m7!3m6!1s0x8644c944aabd3821:0xe4adaade35f8050d!8m2!3d30.3766561!4d-97.687064!16s%2Fg%2F1hc25br5f!19sChIJITi9qkTJRIYRDQX4Nd6qreQ?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.ttautorepair.net/',
			storeName: 'T&T Auto Repair',
			ratingText: '4.3 stars 107 Reviews',
			stars: 4.3,
			numberOfReviews: 107
		},
		{
			placeId: 'ChIJuWqbZDbKRIYRfHq0tYY56R0',
			address: '8807 N Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 251-0451',
			googleUrl:
				'https://www.google.com/maps/place/Olmeda%27s+Tire+%26+Auto/data=!4m7!3m6!1s0x8644ca36649b6ab9:0x1de93986b5b47a7c!8m2!3d30.3564152!4d-97.7008357!16s%2Fg%2F1tp08hqn!19sChIJuWqbZDbKRIYRfHq0tYY56R0?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://olmedatireandauto.com/',
			storeName: "Olmeda's Tire & Auto",
			ratingText: '4.6 stars 154 Reviews',
			stars: 4.6,
			numberOfReviews: 154
		},
		{
			placeId: 'ChIJowZtblzJRIYRhGyF1hSOLdc',
			address: '811 Mc Phaul St',
			category: 'Auto repair shop',
			phone: '(512) 837-1987',
			googleUrl:
				'https://www.google.com/maps/place/Abee%27s+Hi-Tech+Auto+Service/data=!4m7!3m6!1s0x8644c95c6e6d06a3:0xd72d8e14d6856c84!8m2!3d30.3753069!4d-97.6910829!16s%2Fg%2F1tqcllzb!19sChIJowZtblzJRIYRhGyF1hSOLdc?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://abeesautomotive.com/',
			storeName: "Abee's Hi-Tech Auto Service",
			ratingText: '4.8 stars 86 Reviews',
			stars: 4.8,
			numberOfReviews: 86
		},
		{
			placeId: 'ChIJAQ29CeW1RIYRtF6cq3HcNHM',
			address: '3710 Airport Blvd',
			category: 'Auto repair shop',
			phone: '(512) 539-0992',
			googleUrl:
				'https://www.google.com/maps/place/Austin%27s+Finest+Alignments+%26+Brakes/data=!4m7!3m6!1s0x8644b5e509bd0d01:0x7334dc71ab9c5eb4!8m2!3d30.286702!4d-97.707298!16s%2Fg%2F1vn_zbq2!19sChIJAQ29CeW1RIYRtF6cq3HcNHM?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://austinsfinestalignmentsandbrakes.com/',
			storeName: "Austin's Finest Alignments & Brakes",
			ratingText: '4.5 stars 111 Reviews',
			stars: 4.5,
			numberOfReviews: 111
		},
		{
			placeId: 'ChIJNwpCRsVMW4YRKUNXfNr3yv0',
			address: '405 W Slaughter Ln',
			category: 'Auto repair shop',
			phone: '(512) 291-6789',
			googleUrl:
				'https://www.google.com/maps/place/Sun+Auto+Service/data=!4m7!3m6!1s0x865b4cc546420a37:0xfdcaf7da7c574329!8m2!3d30.1694943!4d-97.7969037!16s%2Fg%2F1tf6mmmg!19sChIJNwpCRsVMW4YRKUNXfNr3yv0?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://www.sunautoservice.com/locations/tx/austin/auto-repair-4172.html',
			storeName: 'Sun Auto Service',
			ratingText: '4.2 stars 821 Reviews',
			stars: 4.2,
			numberOfReviews: 821
		},
		{
			placeId: 'ChIJl3rb3DRLW4YRAf3Koes3GWY',
			address: '1900 Fort View Rd',
			category: 'Auto repair shop',
			phone: '(512) 441-8939',
			googleUrl:
				'https://www.google.com/maps/place/Lopez+Auto+Repair/data=!4m7!3m6!1s0x865b4b34dcdb7a97:0x661937eba1cafd01!8m2!3d30.2307601!4d-97.7865565!16s%2Fg%2F1tksj6gh!19sChIJl3rb3DRLW4YRAf3Koes3GWY?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://lopezautorepair.com/',
			storeName: 'Lopez Auto Repair',
			ratingText: '4.7 stars 118 Reviews',
			stars: 4.7,
			numberOfReviews: 118
		},
		{
			placeId: 'ChIJwSUG7ugwW4YRXSWm1hGladM',
			address: '4502 Doss Rd',
			category: 'Auto repair shop',
			phone: '(512) 545-8271',
			googleUrl:
				'https://www.google.com/maps/place/AO+Amigos+Auto+Service/data=!4m7!3m6!1s0x865b30e8ee0625c1:0xd369a511d6a6255d!8m2!3d30.4061845!4d-97.9278567!16s%2Fg%2F11dxnkt45h!19sChIJwSUG7ugwW4YRXSWm1hGladM?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.aoamigosautoservice.com/',
			storeName: 'AO Amigos Auto Service',
			ratingText: '4.8 stars 132 Reviews',
			stars: 4.8,
			numberOfReviews: 132
		},
		{
			placeId: 'ChIJUVsc15W0RIYR2QrBZB052Hg',
			address: '3916 Woodbury Dr',
			category: 'Auto repair shop',
			phone: '(512) 447-7801',
			googleUrl:
				'https://www.google.com/maps/place/Newman%27s+Automotive/data=!4m7!3m6!1s0x8644b495d71c5b51:0x78d8391d64c10ad9!8m2!3d30.2233016!4d-97.7612491!16s%2Fg%2F1tj73_67!19sChIJUVsc15W0RIYR2QrBZB052Hg?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.newmansauto.com/',
			storeName: "Newman's Automotive",
			ratingText: '4.6 stars 1,013 Reviews',
			stars: 4.6,
			numberOfReviews: null
		},
		{
			placeId: 'ChIJmzblnLm0RIYRiLbLuTPxYFI',
			address: '4222 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 445-9644',
			googleUrl:
				'https://www.google.com/maps/place/Superior+Automotive/data=!4m7!3m6!1s0x8644b4b99ce5369b:0x5260f133b9cbb688!8m2!3d30.2234113!4d-97.7717682!16s%2Fg%2F1tlkcrzm!19sChIJmzblnLm0RIYRiLbLuTPxYFI?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.superiorautomotiveaustin.com/',
			storeName: 'Superior Automotive',
			ratingText: '4.9 stars 85 Reviews',
			stars: 4.9,
			numberOfReviews: 85
		},
		{
			placeId: 'ChIJHXJ_8uy1RIYRwCX72_N-Eqo',
			address: '2300 Manor Rd',
			category: 'Auto repair shop',
			phone: '(512) 478-2417',
			googleUrl:
				'https://www.google.com/maps/place/Gene+Johnson+Automotive+Services/data=!4m7!3m6!1s0x8644b5ecf27f721d:0xaa127ef3dbfb25c0!8m2!3d30.2847484!4d-97.7177968!16s%2Fg%2F1wrtd7fr!19sChIJHXJ_8uy1RIYRwCX72_N-Eqo?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://genejohnsonautomotive.com/',
			storeName: 'Gene Johnson Automotive Services',
			ratingText: '4.1 stars 117 Reviews',
			stars: 4.1,
			numberOfReviews: 117
		},
		{
			placeId: 'ChIJh0_gHx22RIYReWFSj5V0mQ4',
			address: '5209 Manor Rd',
			category: 'Auto repair shop',
			phone: '(512) 549-4597',
			googleUrl:
				'https://www.google.com/maps/place/APR+Engines+%26+Automotive/data=!4m7!3m6!1s0x8644b61d1fe04f87:0xe9974958f526179!8m2!3d30.2993034!4d-97.6859506!16s%2Fg%2F11c1nd3_yj!19sChIJh0_gHx22RIYReWFSj5V0mQ4?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.autorepairshopaustin.com/',
			storeName: 'APR Engines & Automotive',
			ratingText: '4.8 stars 94 Reviews',
			stars: 4.8,
			numberOfReviews: 94
		},
		{
			placeId: 'ChIJPX0V0F7PRIYRjvsruFGUq_Q',
			address: '16501 Bratton Ln Bldg 2, Suite A',
			category: 'Auto repair shop',
			phone: '(512) 967-0577',
			googleUrl:
				'https://www.google.com/maps/place/Genuine+Automotive+%26+Diesel/data=!4m7!3m6!1s0x8644cf5ed0157d3d:0xf4ab9451b82bfb8e!8m2!3d30.4699503!4d-97.6744524!16s%2Fg%2F11g1ks2xb0!19sChIJPX0V0F7PRIYRjvsruFGUq_Q?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://genuineautomotive.net/',
			storeName: 'Genuine Automotive & Diesel',
			ratingText: '4.8 stars 301 Reviews',
			stars: 4.8,
			numberOfReviews: 301
		},
		{
			placeId: 'ChIJMRgaRSq0RIYRyfAyDXoq5jw',
			address: '13501 US-183',
			category: 'Auto repair shop',
			phone: '(512) 360-8889',
			googleUrl:
				'https://www.google.com/maps/place/DR+Euro+Master+Auto+Repair/data=!4m7!3m6!1s0x8644b42a451a1831:0x3ce62a7a0d32f0c9!8m2!3d30.4504763!4d-97.7899208!16s%2Fg%2F11f3_ty31z!19sChIJMRgaRSq0RIYRyfAyDXoq5jw?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.dreuromasterautorepair.com/',
			storeName: 'DR Euro Master Auto Repair',
			ratingText: '4.7 stars 133 Reviews',
			stars: 4.7,
			numberOfReviews: 133
		},
		{
			placeId: 'ChIJi8zDP-G1RIYRCYD4s7yOEWI',
			address: '3235 E Martin Luther King Jr Blvd',
			category: 'Auto repair shop',
			phone: '(512) 477-7575',
			googleUrl:
				'https://www.google.com/maps/place/Automotive+Services+of+Austin/data=!4m7!3m6!1s0x8644b5e13fc3cc8b:0x62118ebcb3f88009!8m2!3d30.2824746!4d-97.7023616!16s%2Fg%2F1thzv5kp!19sChIJi8zDP-G1RIYRCYD4s7yOEWI?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://autoservicesofaustin.com/?utm_source=omg-gbp&utm_medium=webclick',
			storeName: 'Automotive Services of Austin',
			ratingText: '4.0 stars 153 Reviews',
			stars: 4,
			numberOfReviews: 153
		},
		{
			placeId: 'ChIJgazCMTdLW4YRb17p-orBCM8',
			address: '2415 W Ben White Blvd',
			category: 'Auto repair shop',
			phone: '(512) 593-7761',
			googleUrl:
				'https://www.google.com/maps/place/Midas/data=!4m7!3m6!1s0x865b4b3731c2ac81:0xcf08c18afae95e6f!8m2!3d30.231982!4d-97.794005!16s%2Fg%2F1tgkhq3x!19sChIJgazCMTdLW4YRb17p-orBCM8?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://www.midas.com/store/tx/austin/2415-west-ben-white-boulevard-78704?shopnum=5886&utm_source=google&utm_medium=maps&utm_campaign=google+maps&y_source=1_MTE5MjE3NzUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
			storeName: 'Midas',
			ratingText: '4.4 stars 716 Reviews',
			stars: 4.4,
			numberOfReviews: 716
		},
		{
			placeId: 'ChIJlUWDjjC1RIYRHr6TpE-nNU4',
			address: '3614 Chapman Ln',
			category: 'Auto repair shop',
			phone: '(512) 373-8699',
			googleUrl:
				'https://www.google.com/maps/place/Cap%27s+Service+and+Repair/data=!4m7!3m6!1s0x8644b5308e834595:0x4e35a74fa493be1e!8m2!3d30.2124219!4d-97.7294889!16s%2Fg%2F11fql6ys7v!19sChIJlUWDjjC1RIYRHr6TpE-nNU4?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.facebook.com/CapsServiceandRepair/',
			storeName: "Cap's Service and Repair",
			ratingText: '5.0 stars 50 Reviews',
			stars: 5,
			numberOfReviews: 50
		},
		{
			placeId: 'ChIJkce5j67LRIYRkLN-NsoRvX4',
			address: '7528 Burnet Rd',
			category: 'Auto repair shop',
			phone: '(512) 454-3454',
			googleUrl:
				'https://www.google.com/maps/place/Advanced+Automotive+%26+Tire/data=!4m7!3m6!1s0x8644cbae8fb9c791:0x7ebd11ca367eb390!8m2!3d30.3516876!4d-97.7339041!16s%2Fg%2F1tf48jzl!19sChIJkce5j67LRIYRkLN-NsoRvX4?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.advancedautoandtire.com/',
			storeName: 'Advanced Automotive & Tire',
			ratingText: '4.8 stars 138 Reviews',
			stars: 4.8,
			numberOfReviews: 138
		},
		{
			placeId: 'ChIJN5G9Ue3ORIYRDblCYjvR_J0',
			address: '1601 Hydro Dr',
			category: 'Auto repair shop',
			phone: '(512) 383-8000',
			googleUrl:
				'https://www.google.com/maps/place/Amazing+Auto+Repair+%26+Transmission/data=!4m7!3m6!1s0x8644ceed51bd9137:0x9dfcd13b6242b90d!8m2!3d30.42824!4d-97.6760366!16s%2Fg%2F1yg4d0s_n!19sChIJN5G9Ue3ORIYRDblCYjvR_J0?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.amazingautoandtransmissionrepair.com/',
			storeName: 'Amazing Auto Repair & Transmission',
			ratingText: '4.5 stars 394 Reviews',
			stars: 4.5,
			numberOfReviews: 394
		},
		{
			placeId: 'ChIJaxlEdppIW4YRyFq0xAQhy-k',
			address: '11218 US-290',
			category: 'Auto repair shop',
			phone: '(512) 300-9951',
			googleUrl:
				'https://www.google.com/maps/place/Joe+the+Mechanic/data=!4m7!3m6!1s0x865b489a7644196b:0xe9cb2104c4b45ac8!8m2!3d30.2192477!4d-97.9619896!16s%2Fg%2F11clwpkf1z!19sChIJaxlEdppIW4YRyFq0xAQhy-k?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.austintxmechanic.com/',
			storeName: 'Joe the Mechanic',
			ratingText: '4.8 stars 53 Reviews',
			stars: 4.8,
			numberOfReviews: 53
		},
		{
			placeId: 'ChIJeZw7IqzLRIYRnaaD7ZeBvhA',
			address: '7430 Burnet Rd',
			category: 'Tire shop',
			phone: '(512) 453-2221',
			googleUrl:
				'https://www.google.com/maps/place/Lucas+Tire+%26+Auto+Service/data=!4m7!3m6!1s0x8644cbac223b9c79:0x10be8197ed83a69d!8m2!3d30.3504297!4d-97.7348658!16s%2Fg%2F11b75fh7xc!19sChIJeZw7IqzLRIYRnaaD7ZeBvhA?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://lucastirepros.com/',
			storeName: 'Lucas Tire & Auto Service',
			ratingText: '4.8 stars 350 Reviews',
			stars: 4.8,
			numberOfReviews: 350
		},
		{
			placeId: 'ChIJZy5QIMHLRIYRCbvO8QQgQ5M',
			address: '8701 Research Blvd suite h',
			category: 'Auto repair shop',
			phone: '(512) 454-3733',
			googleUrl:
				'https://www.google.com/maps/place/Excalibur+Automotive+Repair/data=!4m7!3m6!1s0x8644cbc120502e67:0x93432004f1cebb09!8m2!3d30.3651901!4d-97.7172898!16s%2Fg%2F1vjdqg4n!19sChIJZy5QIMHLRIYRCbvO8QQgQ5M?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://excaliburautorepair.com/',
			storeName: 'Excalibur Automotive Repair',
			ratingText: '4.6 stars 254 Reviews',
			stars: 4.6,
			numberOfReviews: 254
		},
		{
			placeId: 'ChIJ_Q5OjA_ORIYRti24BHiXnB8',
			address: '16299 Farm to Market Rd 1325 B',
			category: 'Auto repair shop',
			phone: '(512) 310-1107',
			googleUrl:
				'https://www.google.com/maps/place/Pampered+Auto+Care/data=!4m7!3m6!1s0x8644ce0f8c4e0efd:0x1f9c977804b82db6!8m2!3d30.4735959!4d-97.6888111!16s%2Fg%2F1tdvkksy!19sChIJ_Q5OjA_ORIYRti24BHiXnB8?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.pamperedautocare.com/',
			storeName: 'Pampered Auto Care',
			ratingText: '4.5 stars 140 Reviews',
			stars: 4.5,
			numberOfReviews: 140
		},
		{
			placeId: 'ChIJm5Fn7qe0RIYRMFZ3UXqfUKI',
			address: '7928-A State Hwy 71',
			category: 'Auto repair shop',
			phone: '(512) 447-0447',
			googleUrl:
				'https://www.google.com/maps/place/Best+Automotive/data=!4m7!3m6!1s0x8644b4a7ee67919b:0xa2509f7a51775630!8m2!3d30.2445491!4d-97.8840885!16s%2Fg%2F1tf5qmhx!19sChIJm5Fn7qe0RIYRMFZ3UXqfUKI?authuser=0&hl=en&rclk=1',
			storeName: 'Best Automotive',
			ratingText: '4.8 stars 59 Reviews',
			stars: 4.8,
			numberOfReviews: 59
		},
		{
			placeId: 'ChIJAw0QGh-1RIYRsF0FoFZ6-8Y',
			address: '1001 S Lamar Blvd',
			category: 'Auto repair shop',
			phone: '(512) 443-4122',
			googleUrl:
				'https://www.google.com/maps/place/Rising+Sun+Automotive/data=!4m7!3m6!1s0x8644b51f1a100d03:0xc6fb7a56a0055db0!8m2!3d30.2557232!4d-97.7613253!16s%2Fg%2F1tdc5m5t!19sChIJAw0QGh-1RIYRsF0FoFZ6-8Y?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.risingsunjapanese.com/',
			storeName: 'Rising Sun Automotive',
			ratingText: '4.5 stars 206 Reviews',
			stars: 4.5,
			numberOfReviews: 206
		},
		{
			placeId: 'ChIJFwrTzMjJRIYRZp6rDTRaafs',
			address: '3415 Andtree Blvd',
			category: 'Auto repair shop',
			phone: '(512) 861-6574',
			googleUrl:
				'https://www.google.com/maps/place/Tex+Tune+Automotive/data=!4m7!3m6!1s0x8644c9c8ccd30a17:0xfb695a340dab9e66!8m2!3d30.3223541!4d-97.6605718!16s%2Fg%2F11pv5hhszt!19sChIJFwrTzMjJRIYRZp6rDTRaafs?authuser=0&hl=en&rclk=1',
			storeName: 'Tex Tune Automotive',
			ratingText: '5.0 stars 38 Reviews',
			stars: 5,
			numberOfReviews: 38
		},
		{
			placeId: 'ChIJnWvSy-hLW4YRF1WETdIk_ww',
			address: '5001 US-290 W',
			category: 'Auto repair shop',
			phone: '(512) 891-9988',
			googleUrl:
				'https://www.google.com/maps/place/Lamb%27s+Tire+%26+Automotive/data=!4m7!3m6!1s0x865b4be8cbd26b9d:0xcff24d24d845517!8m2!3d30.2327314!4d-97.8214999!16s%2Fg%2F1xpwk63h!19sChIJnWvSy-hLW4YRF1WETdIk_ww?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.lambstire.com/',
			storeName: "Lamb's Tire & Automotive",
			ratingText: '4.5 stars 739 Reviews',
			stars: 4.5,
			numberOfReviews: 739
		},
		{
			placeId: 'ChIJoUCN-HvKRIYRnEY1BLV7ab8',
			address: '4001 Guadalupe St',
			category: 'Auto repair shop',
			phone: '(512) 893-6265',
			googleUrl:
				'https://www.google.com/maps/place/Midas/data=!4m7!3m6!1s0x8644ca7bf88d40a1:0xbf697bb50435469c!8m2!3d30.3054549!4d-97.7360475!16s%2Fg%2F1tcvc8mb!19sChIJoUCN-HvKRIYRnEY1BLV7ab8?authuser=0&hl=en&rclk=1',
			bizWebsite:
				'https://www.midas.com/store/tx/austin/4001-guadalupe-street-78751?shopnum=5533&utm_source=google&utm_medium=maps&utm_campaign=google+maps&y_source=1_MTE5MDg0NDgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
			storeName: 'Midas',
			ratingText: '4.1 stars 1,097 Reviews',
			stars: 4.1,
			numberOfReviews: null
		},
		{
			placeId: 'ChIJD0Sfl1zJRIYR9Hzsl9TvEvY',
			address: '710 W Grady Dr #3440',
			category: 'Auto repair shop',
			phone: '(512) 986-9889',
			googleUrl:
				'https://www.google.com/maps/place/Tri%27s+Auto+Repair/data=!4m7!3m6!1s0x8644c95c979f440f:0xf612efd497ec7cf4!8m2!3d30.3756979!4d-97.6889184!16s%2Fg%2F11dx8mknt_!19sChIJD0Sfl1zJRIYR9Hzsl9TvEvY?authuser=0&hl=en&rclk=1',
			storeName: "Tri's Auto Repair",
			ratingText: '4.7 stars 66 Reviews',
			stars: 4.7,
			numberOfReviews: 66
		},
		{
			placeId: 'ChIJr8TfpCzLRIYRXMKHAn2aCB8',
			address: '301 W Koenig Ln',
			category: 'Car inspection station',
			phone: '(512) 459-5869',
			googleUrl:
				'https://www.google.com/maps/place/Koenig+Lane+Inspections/data=!4m7!3m6!1s0x8644cb2ca4dfc4af:0x1f089a7d0287c25c!8m2!3d30.3227442!4d-97.7223!16s%2Fg%2F11tdsdtz1v!19sChIJr8TfpCzLRIYRXMKHAn2aCB8?authuser=0&hl=en&rclk=1',
			storeName: 'Koenig Lane Inspections',
			ratingText: '4.8 stars 106 Reviews',
			stars: 4.8,
			numberOfReviews: 106
		},
		{
			placeId: 'ChIJJyfEpOO0RIYRHyoXMaVC3N0',
			address: '1636 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 447-9032',
			googleUrl:
				'https://www.google.com/maps/place/Don%27s+Automotive+Repair/data=!4m7!3m6!1s0x8644b4e3a4c42727:0xdddc42a531172a1f!8m2!3d30.2482892!4d-97.7556949!16s%2Fg%2F1thcsq_9!19sChIJJyfEpOO0RIYRHyoXMaVC3N0?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://donsautomotive.com/',
			storeName: "Don's Automotive Repair",
			ratingText: '4.6 stars 108 Reviews',
			stars: 4.6,
			numberOfReviews: 108
		},
		{
			placeId: 'ChIJAesNNFxLW4YRHOX0eMZsM3Q',
			address: '6212 Menchaca Rd',
			category: 'Brake shop',
			phone: '(512) 445-6887',
			googleUrl:
				'https://www.google.com/maps/place/Lugnuts+Automotive/data=!4m7!3m6!1s0x865b4b5c340deb01:0x74336cc678f4e51c!8m2!3d30.2104069!4d-97.8039918!16s%2Fg%2F1tdks6lv!19sChIJAesNNFxLW4YRHOX0eMZsM3Q?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.lugnutsautomotive.com/',
			storeName: 'Lugnuts Automotive',
			ratingText: '4.8 stars 119 Reviews',
			stars: 4.8,
			numberOfReviews: 119
		},
		{
			placeId: 'ChIJu_xi1M7LRIYR3rV7ZzjoRIY',
			address: '8215 Research Blvd',
			category: 'Auto repair shop',
			phone: '(512) 452-6437',
			googleUrl:
				'https://www.google.com/maps/place/German+Auto+Center/data=!4m7!3m6!1s0x8644cbced462fcbb:0x8644e838677bb5de!8m2!3d30.35463!4d-97.71434!16s%2Fg%2F1tdfz364!19sChIJu_xi1M7LRIYR3rV7ZzjoRIY?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.germanautocenter.com/',
			storeName: 'German Auto Center',
			ratingText: '4.6 stars 285 Reviews',
			stars: 4.6,
			numberOfReviews: 285
		},
		{
			placeId: 'ChIJ21g5Zvu0RIYR4G_h0Ixzb78',
			address: '1801 S Congress Ave',
			category: 'Auto repair shop',
			phone: '(512) 441-1933',
			googleUrl:
				'https://www.google.com/maps/place/Hi-Tech+Automotive/data=!4m7!3m6!1s0x8644b4fb663958db:0xbf6f738cd0e16fe0!8m2!3d30.2458331!4d-97.7507573!16s%2Fg%2F1tdc5m5k!19sChIJ21g5Zvu0RIYR4G_h0Ixzb78?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.hitechaustin.com/',
			storeName: 'Hi-Tech Automotive',
			ratingText: '4.6 stars 268 Reviews',
			stars: 4.6,
			numberOfReviews: 268
		},
		{
			placeId: 'ChIJ5XUSfUvKRIYR09n_dmB1Iug',
			address: '7200 Woodrow Ave',
			category: 'Auto repair shop',
			phone: '(512) 467-0765',
			googleUrl:
				'https://www.google.com/maps/place/Crestview+Auto+Repair/data=!4m7!3m6!1s0x8644ca4b7d1275e5:0xe822756076ffd9d3!8m2!3d30.3434627!4d-97.7252764!16s%2Fg%2F1tcx1xtj!19sChIJ5XUSfUvKRIYR09n_dmB1Iug?authuser=0&hl=en&rclk=1',
			storeName: 'Crestview Auto Repair',
			ratingText: '4.8 stars 36 Reviews',
			stars: 4.8,
			numberOfReviews: 36
		},
		{
			placeId: 'ChIJSUsVJL-0RIYRYdo4xiEIV6U',
			address: '105 E Braker Ln b',
			category: 'Auto repair shop',
			phone: '(512) 326-4600',
			googleUrl:
				'https://www.google.com/maps/place/Minas+Auto+Care+-+Auto+Repair+Austin/data=!4m7!3m6!1s0x8644b4bf24154b49:0xa5570821c638da61!8m2!3d30.3785828!4d-97.6809943!16s%2Fg%2F11bv6ppdlp!19sChIJSUsVJL-0RIYRYdo4xiEIV6U?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.minasautocare.com/',
			storeName: 'Minas Auto Care - Auto Repair Austin',
			ratingText: '4.9 stars 27 Reviews',
			stars: 4.9,
			numberOfReviews: 27
		},
		{
			placeId: 'ChIJnRMHO2jKRIYRMSqBahVHVQk',
			address: '5319 N Lamar Blvd',
			category: 'Mechanic',
			phone: '(512) 628-8300',
			googleUrl:
				'https://www.google.com/maps/place/Austin+Texas+Mechanic/data=!4m7!3m6!1s0x8644ca683b07139d:0x95547156a812a31!8m2!3d30.321644!4d-97.728735!16s%2Fg%2F11g_p_3zm!19sChIJnRMHO2jKRIYRMSqBahVHVQk?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.austintxmechanic.com/',
			storeName: 'Austin Texas Mechanic',
			ratingText: '4.2 stars 163 Reviews',
			stars: 4.2,
			numberOfReviews: 163
		},
		{
			placeId: 'ChIJN7_kqjTNRIYRpZ7TEpWN6TI',
			address: '10740 Research Blvd #115',
			category: 'Tire shop',
			phone: '(512) 345-5556',
			googleUrl:
				'https://www.google.com/maps/place/Lamb%27s+Tire+%26+Automotive/data=!4m7!3m6!1s0x8644cd34aae4bf37:0x32e98d9512d39ea5!8m2!3d30.3997819!4d-97.7470271!16s%2Fg%2F1tyt5r9z!19sChIJN7_kqjTNRIYRpZ7TEpWN6TI?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.lambstire.com/',
			storeName: "Lamb's Tire & Automotive",
			ratingText: '4.7 stars 1,164 Reviews',
			stars: 4.7,
			numberOfReviews: null
		},
		{
			placeId: 'ChIJPSApwFjKRIYR0UPefKhG3-w',
			address: '5422 Burnet Rd',
			category: 'Auto repair shop',
			phone: '(512) 346-0152',
			googleUrl:
				'https://www.google.com/maps/place/Arbor+Auto+Works/data=!4m7!3m6!1s0x8644ca58c029203d:0xecdf46a87cde43d1!8m2!3d30.3290081!4d-97.7402856!16s%2Fg%2F1tf87gx9!19sChIJPSApwFjKRIYR0UPefKhG3-w?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://arborautoworks.com/',
			storeName: 'Arbor Auto Works',
			ratingText: '4.7 stars 212 Reviews',
			stars: 4.7,
			numberOfReviews: 212
		},
		{
			placeId: 'ChIJPfpA0-q0RIYRBXwI0zuHRCA',
			address: '3500 S Congress Ave',
			category: 'Auto repair shop',
			phone: '(512) 667-8636',
			googleUrl:
				'https://www.google.com/maps/place/Calderon+Auto+Repair/data=!4m7!3m6!1s0x8644b4ead340fa3d:0x2044873bd3087c05!8m2!3d30.2289655!4d-97.7614155!16s%2Fg%2F11fll6fgkw!19sChIJPfpA0-q0RIYRBXwI0zuHRCA?authuser=0&hl=en&rclk=1',
			storeName: 'Calderon Auto Repair',
			ratingText: '4.9 stars 25 Reviews',
			stars: 4.9,
			numberOfReviews: 25
		},
		{
			placeId: 'ChIJcR3Mh-a0RIYRlXpMdH0woPc',
			address: '2216 S 1st St',
			category: 'Auto repair shop',
			phone: '(512) 768-2965',
			googleUrl:
				'https://www.google.com/maps/place/Jimmy%27s+Top+Tech+Auto/data=!4m7!3m6!1s0x8644b4e687cc1d71:0xf7a0307d744c7a95!8m2!3d30.2435398!4d-97.7585501!16s%2Fg%2F1tjyp2yz!19sChIJcR3Mh-a0RIYRlXpMdH0woPc?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.austinautorepairshop.com/',
			storeName: "Jimmy's Top Tech Auto",
			ratingText: '4.6 stars 151 Reviews',
			stars: 4.6,
			numberOfReviews: 151
		},
		{
			placeId: 'ChIJ9ZdEqFAyW4YRE9HIc5aXyMg',
			address: '10208 Ranch Rd 620 N',
			category: 'Auto repair shop',
			phone: '(512) 331-0877',
			googleUrl:
				'https://www.google.com/maps/place/Motormania/data=!4m7!3m6!1s0x865b3250a84497f5:0xc8c8979673c8d113!8m2!3d30.441518!4d-97.8353361!16s%2Fg%2F1tcvc9gt!19sChIJ9ZdEqFAyW4YRE9HIc5aXyMg?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://motormaniainc.com/',
			storeName: 'Motormania',
			ratingText: '4.9 stars 176 Reviews',
			stars: 4.9,
			numberOfReviews: 176
		},
		{
			placeId: 'ChIJEdVXDi7NRIYR4k2pKLVwW2w',
			address: '13200 Pond Springs Rd',
			category: 'Auto repair shop',
			phone: '(512) 331-0437',
			googleUrl:
				'https://www.google.com/maps/place/Raul%27s+Automotive+Inc./data=!4m7!3m6!1s0x8644cd2e0e57d511:0x6c5b70b528a94de2!8m2!3d30.444832!4d-97.778324!16s%2Fg%2F1tld0kq5!19sChIJEdVXDi7NRIYR4k2pKLVwW2w?authuser=0&hl=en&rclk=1',
			bizWebsite: 'http://www.raulsautomotive.com/',
			storeName: "Raul's Automotive Inc.",
			ratingText: '4.4 stars 78 Reviews',
			stars: 4.4,
			numberOfReviews: 78
		},
		{
			placeId: 'ChIJ7cagUaZKW4YR_ze_K0wXHEQ',
			address: '98 Redbud Trail',
			category: 'Gas station',
			phone: '(512) 327-0262',
			googleUrl:
				'https://www.google.com/maps/place/Westlake+Auto+Care/data=!4m7!3m6!1s0x865b4aa651a0c6ed:0x441c174c2bbf37ff!8m2!3d30.2923302!4d-97.79794!16s%2Fg%2F1tffzx_3!19sChIJ7cagUaZKW4YR_ze_K0wXHEQ?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://westlakeautocare.com/',
			storeName: 'Westlake Auto Care',
			ratingText: '4.6 stars 37 Reviews',
			stars: 4.6,
			numberOfReviews: 37
		},
		{
			placeId: 'ChIJcyLeZrC1RIYR7Z3gRUP2f9g',
			address: '1310 E 6th St',
			category: 'Auto body shop',
			phone: '(512) 472-3522',
			googleUrl:
				'https://www.google.com/maps/place/Austin+Body+Works/data=!4m7!3m6!1s0x8644b5b066de2273:0xd87ff64345e09ded!8m2!3d30.2640038!4d-97.7284667!16s%2Fg%2F1wc48c2j!19sChIJcyLeZrC1RIYR7Z3gRUP2f9g?authuser=0&hl=en&rclk=1',
			bizWebsite: 'https://www.austinbodyworks.com/',
			storeName: 'Austin Body Works',
			ratingText: '5.0 stars 146 Reviews',
			stars: 5,
			numberOfReviews: 146
		}
	]

	let resultListTemp = ''
	let resultTitle = ''
	fetchedResult.forEach((company) => {
		resultTitle = company?.category
		resultListTemp += `<tr>
        <td>${company?.storeName}</td>
        <td>${company?.address}</td>
        <td>${company?.phone}</td>
        <td>${company?.bizWebsite}</td>
        <td>${company?.ratingText}</td>
        </tr>`
	})

	return `

<head>

<link href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/rwd.table.min.css" rel="stylesheet" type="text/css" />
<style>

.table-bordered {
  border: 1px solid #ddd !important;
}

table caption {
	padding: .5em 0;
}

@media screen and (max-width: 767px) {
  table caption {
    display: none;
  }
}

.sticky-table-header {
  background-image: linear-gradient(90deg, #cf331e, #ffffff);
}
.table-responsive {
  border-radius: 50px;
}
/* thead {
  background-color: #7f7f81;
    border-radius: 50px;
    border: 1px #000;
    color: #7f7f81;
    border-bottom: 1px solid #3e3e3e;
} */
</style>
</head>
<body>
  <div id="resultTable">

  <div>${resultTitle} around Texas (${fetchedResult?.length} )</div>
<div class="text-center">
<button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
</div>
<br>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive" data-pattern="priority-columns">
        <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered">
          <!-- <caption class="text-center">An example of a responsive table based on RWD-Table-Patterns' <a href="http://gergeo.se/RWD-Table-Patterns/" target="_blank"> solution</a>:</caption> -->
          <thead>
            <tr>
              <th>Company Name</th>
              <th data-priority="1">Address</th>
              <th data-priority="2">Phone</th>
              <th data-priority="3">Website</th>
              <th data-priority="4">Rating</th>
            </tr>
          </thead>
          <tbody>
            ${resultListTemp}
          </tbody>
        </table>
      </div>
      <button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
    </div>
  </div>
</div>

    </div>

  
  <script
  src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
  type="text/javascript"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js"
  type="text/javascript"
></script>
<script
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/rwd-table-patterns.js"
  type="text/javascript"
></script>
<script defer>

</script>
</body>

`
}

export default function Result() {
	return <div dangerouslySetInnerHTML={{ __html: analyseResult() }}></div>
}
