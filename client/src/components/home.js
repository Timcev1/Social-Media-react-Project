import React, { Component} from 'react';
import { Container, Header, Segment, Button, Dimmer, Loader, Divider } from 'semantic-ui-react'

    class Home extends Component {
      constructor(){
        super()
        this.state = {}
        this.getPosts = this.getPosts.bind(this)
        this.getPost = this.getPost.bind(this)
      }
      componentDidMount(){
        this.getPosts()
      }
      fetch(endpoint){
        return new Promise((resolve, reject) =>{
          window.fetch(endpoint)
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(error => reject(error))
        })
      }

      getPosts(){
        this.fetch('api/posts')
        .then(posts =>{
          this.setState({posts: posts})
          posts[0] && this.getPost(posts[0].id)
        })
      }
      getPost(id){
        this.fetch(`api/drinks/${id}`)
        .then(post => this.setState({post: post}))
      }
      render() {
        let {posts, post} = this.state
        return posts
      ?   <Container text>
            <Header as='h2' icon textAlign='center'>
            <div className="Post">
              <header className="App-header">
                <h1 className="App-title">Timber</h1>
              </header>
              <p className="Post-intro">
                this is where posts should go
              </p>
            </div>
          </Header>
          <Button.Group fluid widths={posts.length}>
            {Object.keys(posts).map((key) => {
              return <Button active={post && post.id === posts[key].id} fluid key={key} onClick={() => this.getPost(posts[key].id)}>
                {posts[key].title}
              </Button>
            })}
          </Button.Group>
          <Divider hidden />
          {post &&
            <Container>
              <Header as='h2'>{post.title}</Header>
              {post.content && <p>{post.content}</p>}
              {post.ingredients &&
                <Segment.Group>
                  {post.tags.map((tag, i) => <Segment key={i}>{tag.name}</Segment>)}
                </Segment.Group>
              }
              {post.steps && <p>{post.steps}</p>}
            </Container>
          }
        </Container>
        : <Container text>
          <Dimmer active inverted>
            <Loader content='waiting' />
          </Dimmer>
        </Container>
      }
    }

export default Home;
