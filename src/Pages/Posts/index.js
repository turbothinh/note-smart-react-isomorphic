import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import truncate from 'src/helpers/truncate';
import FlexBox from 'src/Components/FlexBox';
import CardBox from 'src/Components/CardBox';
import { H3, Span } from 'src/Components/Typo';
import Head from 'src/Components/Head';
import Badge from 'src/Components/Badge';

// Import all files inside `data` via Webpack require.context
// Read more:
// https://goo.gl/315fi3 - Importing Multiple Markdown files into a React Component with Webpack
const postContext = require.context('../../../content', false, /\.md$/);
const postFiles = postContext
  .keys()
  .map(filename => postContext(filename));

class Posts extends React.Component {
  state = {
    posts: [],
    lang: 'en',
  }

  componentDidMount() {
    const posts = postFiles;
    const { lang } = this.props.match.params;
    this.setState(state => ({ ...state, posts, lang }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts, lang } = this.state;

    return (
      <React.Fragment>
        <Head title="Posts" />
        <FlexBox
          width={[1, 1 / 2, 1 / 2]}
          mx="auto"
          mt={[2, 3, 4]}
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {
            posts.map((post, i) => (
              <CardBox width={[1, 1/3]} px={[1, 2, 3]} py={[0, 1, 2]} mx={[1, 2, 3]}>
                <Link key={i} to={`/${lang}/posts/${post.slug}`}>
                  <H3 dangerouslySetInnerHTML={{ __html: post.title }} />
                </Link>
                <Span dangerouslySetInnerHTML={{ __html: truncate(post.__content) }} />
                <FlexBox width={1}>
                  <Badge bg="success" dangerouslySetInnerHTML={{ __html: post.category }} />
                  <Span float="right" dangerouslySetInnerHTML={{ __html: post.date }} />
                </FlexBox>
              </CardBox>
            ))
          }
        </FlexBox>
      </React.Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

Posts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      lang: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Posts;
