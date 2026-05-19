import { useMediaQuery } from "hooks";
import {
  IconArrowDown,
  IconArrowUp,
  IconBell,
  IconChevronRight,
  IconCreditCard,
  IconDollarSign,
  IconHome,
  IconPieChart,
  IconPlus,
  IconRefreshCw,
  IconSend,
  IconShield,
  IconTrendingUp,
  IconUser,
  IconZap,
} from "icons";
import { Flex, Grid, Section } from "layout";
import {
  Avatar,
  AvatarBlock,
  Button,
  IconButton,
  Navigation,
  NavigationButton,
  Notification,
  Tag,
  TextHeading,
  TextSmall,
  TextSmallStrong,
  TextStrong,
  TextSubheading,
  TextTitlePage,
} from "primitives";
import { Card, StatsCard } from "compositions";
import { useState } from "react";

const transactions = [
  {
    id: 1,
    name: "Netflix",
    amount: "-$15.99",
    date: "Today",
    initials: "N",
    type: "debit",
    category: "Entertainment",
  },
  {
    id: 2,
    name: "Salary Deposit",
    amount: "+$4,200.00",
    date: "Yesterday",
    initials: "S",
    type: "credit",
    category: "Income",
  },
  {
    id: 3,
    name: "Whole Foods",
    amount: "-$87.32",
    date: "Dec 18",
    initials: "W",
    type: "debit",
    category: "Groceries",
  },
  {
    id: 4,
    name: "Uber",
    amount: "-$12.50",
    date: "Dec 17",
    initials: "U",
    type: "debit",
    category: "Transport",
  },
];

const bankProducts = [
  {
    id: 1,
    title: "Platinum Credit Card",
    description: "3% cashback on all purchases",
    tag: "New",
    scheme: "warning" as const,
    icon: <IconCreditCard />,
  },
  {
    id: 2,
    title: "Personal Loan",
    description: "From 4.9% APR",
    tag: "Popular",
    scheme: "positive" as const,
    icon: <IconDollarSign />,
  },
  {
    id: 3,
    title: "Investment Account",
    description: "Up to 6.2% annual yield",
    tag: "Featured",
    scheme: "brand" as const,
    icon: <IconTrendingUp />,
  },
];

export function BankHomepage() {
  const [activeTab, setActiveTab] = useState("home");
  const { isMobile } = useMediaQuery();

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    maxWidth: isMobile ? "100%" : "430px",
    margin: "0 auto",
    boxShadow: isMobile ? "none" : "0 0 40px rgba(0,0,0,0.12)",
    position: "relative" as const,
    backgroundColor: "var(--sds-color-background-default-secondary)",
  };

  return (
    <div style={containerStyle}>
      {/* Top greeting + notification */}
      <Section variant="brand" padding="600">
        <Flex alignPrimary="space-between" alignSecondary="center">
          <AvatarBlock title="Good morning, Alex" description="Welcome back">
            <Avatar initials="AJ" size="medium" />
          </AvatarBlock>
          <Flex gap="200" alignSecondary="center">
            <IconButton variant="subtle" aria-label="Notifications">
              <IconBell />
            </IconButton>
          </Flex>
        </Flex>
      </Section>

      {/* Balance hero */}
      <Section variant="brand" padding="800">
        <Flex direction="column" gap="400" style={{ padding: "0 var(--sds-size-space-600)" }}>
          <Card variant="stroke" padding="800">
            <Flex direction="column" gap="300">
              <TextSmall>Total Balance</TextSmall>
              <TextTitlePage>$12,450.80</TextTitlePage>
              <Tag scheme="positive" variant="secondary">
                +2.4% this month
              </Tag>
            </Flex>
            <Flex gap="400" alignPrimary="start">
              <Flex direction="column" gap="100">
                <TextSmall>Income</TextSmall>
                <Flex gap="100" alignSecondary="center">
                  <IconArrowUp />
                  <TextStrong>$6,200</TextStrong>
                </Flex>
              </Flex>
              <Flex direction="column" gap="100">
                <TextSmall>Expenses</TextSmall>
                <Flex gap="100" alignSecondary="center">
                  <IconArrowDown />
                  <TextStrong>$2,840</TextStrong>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Section>

      {/* Quick Actions */}
      <Section variant="subtle" padding="600">
        <Flex direction="column" gap="400">
          <TextHeading>Quick Actions</TextHeading>
          <Grid columns="repeat(4, 1fr)" gap="300">
            <NavigationButton
              icon={<IconSend />}
              direction="column"
              size="small"
              onPress={() => {}}
            >
              Send
            </NavigationButton>
            <NavigationButton
              icon={<IconArrowDown />}
              direction="column"
              size="small"
              onPress={() => {}}
            >
              Receive
            </NavigationButton>
            <NavigationButton
              icon={<IconRefreshCw />}
              direction="column"
              size="small"
              onPress={() => {}}
            >
              Transfer
            </NavigationButton>
            <NavigationButton
              icon={<IconPlus />}
              direction="column"
              size="small"
              onPress={() => {}}
            >
              Top Up
            </NavigationButton>
          </Grid>
        </Flex>
      </Section>

      {/* Promo banner */}
      <Section variant="subtle" padding="600">
        <Notification
          icon={<IconZap />}
          variant="message"
        >
          <TextSmallStrong>Limited offer: </TextSmallStrong>
          <TextSmall>Get 3% cashback on all spends this week with your Platinum Card.</TextSmall>
        </Notification>
      </Section>

      {/* Recent Transactions */}
      <Section variant="subtle" paddingTop="600" padding="600">
        <Flex direction="column" gap="400">
          <Flex alignPrimary="space-between" alignSecondary="center">
            <TextHeading>Recent Transactions</TextHeading>
            <Button variant="subtle" size="small" onPress={() => {}}>
              See all
            </Button>
          </Flex>
          <Flex direction="column" gap="200">
            {transactions.map((tx) => (
              <Card key={tx.id} variant="stroke" padding="600" direction="horizontal">
                <Flex alignPrimary="space-between" alignSecondary="center">
                  <AvatarBlock title={tx.name} description={tx.category}>
                    <Avatar
                      initials={tx.initials}
                      size="medium"
                      square={tx.type === "credit"}
                    />
                  </AvatarBlock>
                  <Flex direction="column" alignSecondary="end" gap="100">
                    <TextStrong
                      style={{
                        color:
                          tx.type === "credit"
                            ? "var(--sds-color-background-positive-default)"
                            : undefined,
                      }}
                    >
                      {tx.amount}
                    </TextStrong>
                    <TextSmall>{tx.date}</TextSmall>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Section>

      {/* Bank Products */}
      <Section variant="neutral" padding="600">
        <Flex direction="column" gap="400">
          <TextHeading>Products for You</TextHeading>
          <Flex direction="column" gap="300">
            {bankProducts.map((product) => (
              <Card
                key={product.id}
                variant="stroke"
                padding="600"
                direction="horizontal"
                interactionProps={{ onPress: () => {} }}
              >
                <Flex alignPrimary="space-between" alignSecondary="center">
                  <Flex gap="300" alignSecondary="center">
                    <Avatar initials="  " size="medium" square>
                      {product.icon}
                    </Avatar>
                    <Flex direction="column" gap="100">
                      <Flex gap="200" alignSecondary="center">
                        <TextSubheading>{product.title}</TextSubheading>
                        <Tag scheme={product.scheme} variant="secondary">
                          {product.tag}
                        </Tag>
                      </Flex>
                      <TextSmall>{product.description}</TextSmall>
                    </Flex>
                  </Flex>
                  <IconChevronRight />
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Section>

      {/* Insights / Stats */}
      <Section variant="subtle" padding="600">
        <Flex direction="column" gap="400">
          <TextHeading>Your Insights</TextHeading>
          <Grid columns="repeat(2, 1fr)" gap="300">
            <StatsCard
              icon={<IconShield />}
              stat="850"
              description="Credit score"
            />
            <StatsCard
              icon={<IconTrendingUp />}
              stat="$1,240"
              description="Saved this month"
            />
          </Grid>
        </Flex>
      </Section>

      {/* Spacer to prevent content hiding behind bottom nav */}
      <div style={{ height: "80px" }} />

      {/* Bottom Navigation */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "var(--sds-color-background-default-default)",
          borderTop: `1px solid var(--sds-color-border-default-default)`,
          padding:
            "var(--sds-size-space-300) var(--sds-size-space-200) var(--sds-size-space-600)",
        }}
      >
        <Navigation direction="row">
          <Grid columns="repeat(5, 1fr)" style={{ width: "100%" }}>
            <NavigationButton
              icon={<IconHome />}
              isSelected={activeTab === "home"}
              onPress={() => setActiveTab("home")}
              direction="column"
              size="small"
            >
              Home
            </NavigationButton>
            <NavigationButton
              icon={<IconCreditCard />}
              isSelected={activeTab === "cards"}
              onPress={() => setActiveTab("cards")}
              direction="column"
              size="small"
            >
              Cards
            </NavigationButton>
            <NavigationButton
              icon={<IconRefreshCw />}
              isSelected={activeTab === "transfer"}
              onPress={() => setActiveTab("transfer")}
              direction="column"
              size="small"
            >
              Transfer
            </NavigationButton>
            <NavigationButton
              icon={<IconPieChart />}
              isSelected={activeTab === "stats"}
              onPress={() => setActiveTab("stats")}
              direction="column"
              size="small"
            >
              Stats
            </NavigationButton>
            <NavigationButton
              icon={<IconUser />}
              isSelected={activeTab === "profile"}
              onPress={() => setActiveTab("profile")}
              direction="column"
              size="small"
            >
              Profile
            </NavigationButton>
          </Grid>
        </Navigation>
      </div>
    </div>
  );
}
