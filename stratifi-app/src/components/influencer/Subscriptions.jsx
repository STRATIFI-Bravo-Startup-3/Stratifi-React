import ButtonSm from "../common/ButtonSm";

const Subscriptions = () => {
  return (
    <div className="flex flex-col bg-gray-200 w-full mt-8 md:mt-12 p-4 md:px-8 gap-4 text-sm md:text-base animate__animated animate__fadeIn">
      <h1 className="text-2xl font-bold text-gray-700">
        Billing & Subscriptions
      </h1>
      <div className="flex flex-col gap-3">
        <span>Active Subscription: Premium Plan</span>
        <span>Expires: May 2024</span>
        <ButtonSm label="Change Plan" />
      </div>
    </div>
  );
};

export default Subscriptions;
