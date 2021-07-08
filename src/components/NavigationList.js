import React from "react";
import clsx from "clsx";
import styles from "./NavigationList.module.css";
import Link from "@docusaurus/Link";

const NavigationSections = [
  {
    title: "Getting Started",
    links: [
      {
        title: "First User Registration",
        url: "docs/getting-started/first-user-registration",
      },
      {
        title: "Forem Setup Checklist",
        url: "docs/getting-started/forem-setup-checklist",
      },
    ],
  },
  {
    title: "Forem Basics",
    links: [
      { title: "Pages", url: "docs/forem-basics/pages" },
      { title: "Posts", url: "docs/forem-basics/posts" },
      { title: "Tags", url: "docs/forem-basics/tags" },
    ],
  },
  {
    title: "Managing Your Community",
    links: [
      {
        title: "How do I delete a post or comment?",
        url: "docs/managing-your-community/deleting-posts-and-comments",
      },
      {
        title: "How do I remove spam?",
        url: "docs/managing-your-community/removing-spam",
      },
      {
        title: "How do I suspend a user?",
        url: "docs/managing-your-community/suspending-users",
      },
    ],
  },
  {
    title: "Advanced Customization",
    links: [
      { title: "Display Ads", url: "docs/advanced-customization/display-ads" },
      {
        title: "HTML Variants",
        url: "docs/advanced-customization/html-variants",
      },
      {
        title: "Tag Display Order",
        url: "docs/advanced-customization/tag-display-order",
      },
    ],
  },
  {
    title: "Frequently Asked Questions",
    links: [
      {
        title:
          "How do I change the background image of the onboarding screens?",
        url: "docs/frequently-asked-questions",
      },
      {
        title: "How do I set the logo on my Forem?",
        url: "docs/frequently-asked-questions",
      },
      {
        title: "Where do I go to get help with self-hosting my Forem?",
        url: "docs/frequently-asked-questions",
      },
    ],
  },
  {
    title: "Community Resources",
    links: [
      {
        title: "Who are these docs for?",
        url: "docs/community-resources/who-are-these-docs-for",
      },
      {
        title: "Connect with Forem builders?",
        url: "docs/community-resources/connect-with-forem-builders",
      },
      {
        title: "How can I submit a bug report?",
        url: "docs/community-resources/submit-bug-report",
      },
    ],
  },
];

function Column({ title, links }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md margin-top--lg">
        <h3>{title}</h3>
        <div className={styles.links}>
          {links.map((props, idx) => (
            <Link key={idx} to={props.url}>
              {props.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavigationList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {NavigationSections.map((props, idx) => (
            <Column key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
