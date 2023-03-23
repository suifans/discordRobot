



const  NextPage = () => {



    return (
        <div className="w-screen h-screen bg-black">
            <div className="p-10">
                <div className=" rounded-full h-20  p-8 flex justify-between text-black font-semibold text-2xl bg-gray-200 items-center">
                    <div>
                        Sui.Robots
                    </div>
                </div>
                <div className="mx-auto w-5/12 bg-white rounded-lg flex flex-col   mt-10 p-8">
                    <div className="mx-auto text-center">
                        <div className="text-3xl font-semibold ">
                            Wallet Connected!
                        </div>
                        <div className="text-green-400 text-5xl mt-4">
                            <i className="fa fa-check-circle-o" aria-hidden="true" />
                        </div>
                        <div className="text-xl font-semibold">
                            Please check  for your role status.<br/>  The update may take up to 2 minutes to complete.
                        </div>
                        <div className="mt-4">
                            Close this window and return to Discord
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NextPage;
