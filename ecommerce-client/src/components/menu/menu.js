import {useState, useEffect} from 'react'
import {Image, Icon, Input, Button} from 'semantic-ui-react';
import styles from './menu.module.scss';
import {platform} from '@/api';
import Link from 'next/link';
import {map} from 'lodash';
import classNames from 'classnames';

export const Menu = ({isOpenSearch}) => {
    const [platforms, setPlatforms] = useState(null);
    const [showSearch, setShowSearch] = useState(true);

    const openCloseSearch = () => setShowSearch((prevState) => !prevState);

    useEffect(() =>  {
        loadData();
    }, [])

    console.log("showSearch", showSearch)

     const loadData = async()=> {
       try {
           const response = await platform.getAll();
           setPlatforms(response.data)
       } catch (error) {
           console.error(error);
       }
    }

    return (<div className={styles.platforms}>
       {
           map(platforms, (platform)=> (
               <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                   <Image src={platform?.attributes?.icon?.data?.attributes?.url} alt={platform.attributes.title} /> {platform.attributes.title}
               </Link>
           ))
       }
       <button className={styles.search}>
          <Icon name="search" onClick={openCloseSearch}/>
       </button>
       <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>)
}

