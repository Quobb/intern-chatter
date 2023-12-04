import React, { useState } from 'react';

const FollowUnfollowContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: '10%' }}>
      <UnFollowButton />
    </div>
  );
};

const UnFollowButton = () => {
  // i'm Initialize the state with isFollowing set to false using the useState above
  const [isFollowing, setIsFollowing] = useState(false);

  // Function to handle the follow button click
  const handleFollowClick = () => {
    // i have Set isFollowing to true when the follow button is clicked
    setIsFollowing(true);
  };

  // Function to handle the unfollow button click
  const handleUnfollowClick = () => {
    // i have set isFollowing to false when the unfollow button is clicked from the page , code integrator check okay?
    setIsFollowing(false);
  };

  return (
    <div>
      {/* Conditional rendering of follow or unfollow button based on isFollowing state */}
      {isFollowing ? (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleUnfollowClick}>
          Unfollow
        </button>
      ) : (
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full" onClick={handleFollowClick}>
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowUnfollowContainer;
