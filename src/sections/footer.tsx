import styled from "styled-components";
import { Link } from "../components/link";
import { CommunityIcon } from "../branding/communityIcon";
import { useEffect, useState } from "react";
import { useBreakPoints } from "../hooks/useBreakpoints";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.containerPadding.normal};
  background-color: ${({ theme }) => theme.colors.gallade};
  color: ${({ theme }) => theme.colors.text.bright};
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.bright};
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer.normal};
`;

const FooterText = styled.div`
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer.normal};
`;

type FooterLink = {
  label: string;
  link: string;
};

const legalRequirements: FooterLink[] = [
  {
    label: "Impressum",
    link: "/impressum",
  },
  {
    label: "Datenschutzerklärung",
    link: "/datenschutzerklärung",
  },
];

const Icon = styled(CommunityIcon)`
  height: 50px;
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer.gigantic};
`;

const Footer: React.FC = () => {
  const [currentMemberCount, setCurrentMemberCount] = useState<
    number | "loading"
  >("loading");

  const { isTiny, isLarge } = useBreakPoints();

  useEffect(() => {
    void (async () => {
      let response = await fetch(
        "https://discord.com/api/v9/invites/An7DjBxWkh?with_counts=true"
      );

      let parsedResponse = await response.json();
      let fetchedCount = parsedResponse["approximate_member_count"];

      if (typeof fetchedCount === "number") {
        setCurrentMemberCount(fetchedCount);
      }
    })();
  }, []);

  return (
    <Container>
      <LeftSide>
        <Icon />
        {legalRequirements.map(({ label, link }) => (
          <FooterLink to={link}>{label}</FooterLink>
        ))}
        <FooterLink
          to="https://www.paypal.com/paypalme/vgcgemeinde"
          target="_blank"
        >
          Spenden
        </FooterLink>
      </LeftSide>
      {!isTiny && (
        <RightSide>
          {[
            ...(isLarge
              ? [
                  "Größte deutschsprachige VGC Community",
                  "Heimat der VGC Bundesliga",
                ]
              : []),
            `Aktuelle Mitglieder: ${currentMemberCount}`,
          ].map((text) => (
            <FooterText>{text}</FooterText>
          ))}
        </RightSide>
      )}
    </Container>
  );
};

export { Footer };
