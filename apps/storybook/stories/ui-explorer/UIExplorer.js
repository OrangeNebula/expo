import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './AppText';
import ExternalLink from './ExternalLink';
import insertBetween from './insertBetween';
import rem from './rem';

const Title = ({ children }) => (
  <AppText accessibilityRole="heading" style={styles.title}>
    {children}
  </AppText>
);

export const Description = ({ children }) => (
  <AppText style={styles.description}>
    {insertBetween(
      () => (
        <Divider key={Math.random()} />
      ),
      React.Children.toArray(children)
    )}
  </AppText>
);

const Divider = () => <View style={styles.divider} />;

const SourceLink = ({ uri }) => (
  <ExternalLink
    href={`https://github.com/necolas/react-native-web/tree/master/packages/website/storybook/${uri}`}
    style={styles.link}>
    View source code on GitHub
  </ExternalLink>
);

const UIExplorer = ({ children, description, sections, title, url }) => (
  <View style={styles.root}>
    <Title>{title}</Title>
    {description}
    {children}
    {url && <SourceLink uri={url} />}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexBasis: 'auto',
  },
  divider: {
    height: rem(1.3125),
  },
  title: {
    fontSize: rem(2),
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: rem(1.25),
    marginTop: rem(0.5 * 1.3125),
    marginBottom: rem(1.5 * 1.3125),
  },
  link: {
    color: '#1B95E0',
    fontSize: rem(1),
    marginTop: rem(0.5 * 1.3125),
    textDecorationLine: 'underline',
  },
});

export default UIExplorer;
