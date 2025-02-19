
function About() {

    return (

        <div className="flex flex-col p-8 gap-8 mb-8 items-center">
            <h2 className="font-bold text-4xl text-indigo-900 text-center">About</h2>

            <div className="flex flex-col items-center justify-center p-8 gap-10 bg-violet-200 max-w-2xl w-full mx-auto shadow-2xl">
                
                <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-indigo-900 text-center">Why lorem it when you have ChatGPT?</h4>
                <p className="text-justify">Our app brings you a world of flavors with just a few taps. Whether you are craving a quick snack or a gourmet meal, we connect you with the best local restaurants and home-cooked delights. Enjoy a seamless ordering experience and explore new tastes every day.</p>
                </div>

                <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-indigo-900 text-center">Fast, Fresh, and Convenient</h4>
                <p className="text-center">We believe that great food should be easy to access. Thats why we prioritize fresh ingredients, fast delivery, and user-friendly features. With real-time tracking and personalized recommendations, your next meal is just a click away.</p>
                </div>

                <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-indigo-900 text-center">More Than Just an App, A Food Community</h4>
                <p className="text-center">Join a vibrant community of food lovers who share their favorite dishes and dining experiences. Discover hidden gems, leave reviews, and connect with people who appreciate good food as much as you do. Lets make every meal memorable!</p>
                </div>

                </div>
        </div>

    )

}

export default About;