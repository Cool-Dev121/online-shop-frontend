import React from 'react';
import { connect } from 'react-redux';
import {
  TableColumnsDefinition, styled, PaginatedTable, Image,
} from '../../components';
import { AppState, requestTableProductsActionCreator, ProductsDispatch } from '../../store';
import { ProductsTableProductModel, ITEMS_PER_PAGE, MAX_VISIBLE_PAGES_COUNT } from '../../shared';

enum ProductsColumnKey {
  Id,
  Name,
  Price,
  Image,
}

const ImageContainer = styled.div`
  height: 100px;
`;

const productsColumnsDefenition: TableColumnsDefinition<ProductsTableProductModel> = {
  [ProductsColumnKey.Id]: {
    width: 1,
    title: 'Id',
    renderCellItem: (item: ProductsTableProductModel): JSX.Element => <div>{item.id}</div>,
  },
  [ProductsColumnKey.Name]: {
    width: 2,
    title: 'Product Name',
    renderCellItem: (item: ProductsTableProductModel): JSX.Element => <div>{item.name}</div>,
  },
  [ProductsColumnKey.Price]: {
    width: 2,
    title: 'Price',
    renderCellItem: (item: ProductsTableProductModel): JSX.Element => <div>{item.price}</div>,
  },
  [ProductsColumnKey.Image]: {
    width: 5,
    title: 'Image',
    renderCellItem: (item: ProductsTableProductModel): JSX.Element => (
      <ImageContainer>
        <Image src={item.imagePath} />
      </ImageContainer>
    ),
  },
};

interface OwnProps {}
interface StateProps {
  products: ProductsTableProductModel[];
  totalItemsCount: number;
}
interface DispatchProps {
  onPageChange: (start: number, count: number) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

const ProductsScreenInner = (props: Props): JSX.Element => {
  const { products, totalItemsCount, onPageChange } = props;

  return (
    <React.Fragment>
      <PaginatedTable
        items={products}
        itemsPerPage={ITEMS_PER_PAGE}
        maxVisiblePagesCount={MAX_VISIBLE_PAGES_COUNT}
        onPageChange={(page: number) => {
          onPageChange(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE);
        }}
        tableColumnsDefinition={productsColumnsDefenition}
        totalItemsCount={totalItemsCount}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => {
  const { products } = state;
  return { products: products.items, totalItemsCount: products.totalItemsCount };
};

const mapDispatchToProps = (dispatch: ProductsDispatch) => ({
  onPageChange: (start: number, count: number) => {
    dispatch(requestTableProductsActionCreator(start, count));
  },
});

export const ProductsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsScreenInner);
