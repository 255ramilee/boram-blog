import React, {FunctionComponent} from "react";
import {SocialChannels} from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/utils/models";
import styled from "styled-components";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiGoogle,
  SiTwitch,
  SiTwitter,
  SiYoutube,
  SiNotion
} from "react-icons/si";

interface SocialChannelListProps {
  channels: SocialChannels;
}

// Returns a proper icon for a given channel
const createSocialIcon = (channel: keyof SocialChannels) => {
  switch (channel) {
    case "twitter":
      return <SiTwitch/>;
    case "facebook":
      return <SiFacebook/>;
    case "github":
      return <SiGithub/>;
    case "instagram":
      return <SiInstagram/>;
    case "linkedin":
      return <SiLinkedin/>;
    case "twitch":
      return <SiTwitch/>;
    case "youtube":
      return <SiYoutube/>;
    case "notion":
      return <SiNotion/>;
  }

  return <SiGoogle/>;
};

const StyledSocialChannels = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledSocialChannel = styled.li`
  display: inline-block;
  margin: 0 10px 0 0;
  font-size: 1.6em;
  opacity: .7;
  transition: opacity .5s;

  &:hover {
    opacity: 1;
  }
`;

const SocialChannelList: FunctionComponent<SocialChannelListProps> = ({channels}) => (
  <StyledSocialChannels>
    {(Object.keys(channels)).filter(c => channels[c] !== '').map((channel, index) => (
      <StyledSocialChannel key={index}>
        <a
          href={channels[channel]}
          target={`_blank`}
          rel={`noopener`}
          aria-label={channel}
        >
          {createSocialIcon(channel as keyof SocialChannels)}
        </a>
      </StyledSocialChannel>
    ))}
  </StyledSocialChannels>
);

export default SocialChannelList;
